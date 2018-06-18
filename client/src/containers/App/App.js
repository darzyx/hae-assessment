import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.css";
import {
  getCandidates,
  patchCandidate,
  selectFilter,
  selectSort
} from "../../actions/candidatesActions";
import Select from "../../components/Select";
import Table from "../../components/Table";

class App extends Component {
  static propTypes = {
    _candidates: PropTypes.object.isRequired,
    _filter: PropTypes.string.isRequired,
    _sort: PropTypes.string.isRequired,
    _getCandidates: PropTypes.func.isRequired,
    _patchCandidate: PropTypes.func.isRequired,
    _selectFilter: PropTypes.func.isRequired,
    _selectSort: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props._getCandidates();
  }
  filteredAndSorted(items, filter, sort) {
    let result = items.slice();

    switch (filter) {
      case "reviewed":
        result = result.filter(item => item.reviewed);
        break;
      case "unreviewed":
        result = result.filter(item => !item.reviewed);
        break;
      case "all":
      default:
        break;
    }

    switch (sort) {
      case "status":
        return result.sort((a, b) => a.status > b.status ? 1 : -1);
      case "dateApplied":
        return result.sort((a, b) => {
          const aDate = Date.parse(a.date_applied);
          const bDate = Date.parse(b.date_applied);

          return aDate > bDate ? 1 : -1;
        })
      case "default":
      default:
        return result;
    }
  }
  render() {
    const filterOptions = [ "all", "reviewed", "unreviewed" ];
    const sortOptions = [ "default", "status", "dateApplied" ];
    const { filteredAndSorted } = this;
    const {
      _candidates,
      _filter,
      _patchCandidate,
      _selectFilter,
      _selectSort,
      _sort
    } = this.props;

    return (
      <div className="App">
        <h1>Candidates</h1>
        <Select val={_filter} onChange={_selectFilter} options={filterOptions}/>
        <Select val={_sort} onChange={_selectSort} options={sortOptions}/>
        {
          _candidates.isGetting ?
          <p>Fetching candidates...</p> :
          _candidates.items.length === 0 ?
          <p>No candidates fetched.</p> :
          <Table
            items={filteredAndSorted(_candidates.items, _filter, _sort)}
            patchCandidate={_patchCandidate}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  _candidates: state.candidates,
  _filter: state.filter,
  _sort: state.sort
});

const mapDispatchToProps = dispatch => ({
  _getCandidates: () => dispatch(getCandidates()),
  _patchCandidate: (id, status) => dispatch(patchCandidate(id, status)),
  _selectFilter: filter => dispatch(selectFilter(filter)),
  _selectSort: sort => dispatch(selectSort(sort))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
