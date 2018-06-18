import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.css";
import {
  getCandidates,
  selectFilter,
  selectSort
} from "../../actions/candidatesActions";

class App extends Component {
  static propTypes = {
    _candidates: PropTypes.object.isRequired,
    _filter: PropTypes.string.isRequired,
    _sort: PropTypes.string.isRequired,
    _getCandidates: PropTypes.func.isRequired,
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
    const { filteredAndSorted } = this;
    const {
      _candidates,
      _filter,
      _selectFilter,
      _selectSort,
      _sort
    } = this.props;

    return (
      <div className="App">
        <h1>Candidates</h1>
        <select
          value={_filter}
          onChange={(e) => _selectFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="reviewed">Reviewed</option>
          <option value="unreviewed">Unreviewed</option>
        </select>
        <select
          value={_sort}
          onChange={(e) => _selectSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="status">Status</option>
          <option value="dateApplied">Date Applied</option>
        </select>
        {
          _candidates.isGetting ?
          <p>Fetching candidates...</p> :
          _candidates.items.length === 0 ?
          <p>No candidates fetched.</p> :
          <div id="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date Applied</th>
                  <th>Reviewed</th>
                  <th>Status</th>
                  <th>Experience (Years)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredAndSorted(_candidates.items, _filter, _sort)
                    .map((item, key) =>
                      <tr key={key}>
                        <td>{item.name || "N/A"}</td>
                        <td>
                          {
                            [new Date(item.date_applied)].toString() || "N/A"
                          }
                        </td>
                        <td>{item.reviewed ? "yes" : "no"}</td>
                        <td>{item.status || "N/A"}</td>
                        <td>{item.years_exp.toString() || "N/A"}</td>
                        <td>{item.description || "N/A"}</td>
                      </tr>
                    )
                }
              </tbody>
            </table>
          </div>
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
  _selectFilter: filter => dispatch(selectFilter(filter)),
  _selectSort: sort => dispatch(selectSort(sort))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
