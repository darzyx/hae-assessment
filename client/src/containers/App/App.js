import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { getCandidates } from "../../actions/getCandidatesActions";

class App extends Component {
  componentDidMount() {
    this.props._getCandidates();
  }

  render() {
    const { _candidates } = this.props;

    return (
      <div className="App">
        <h1>Candidates</h1>
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
                  _candidates.items.map((candidate, key) =>
                    <tr key={key}>
                      <td>{candidate.name || "N/A"}</td>
                      <td>{candidate.date_applied || "N/A"}</td>
                      <td>{candidate.reviewed.toString() || "N/A"}</td>
                      <td>{candidate.status || "N/A"}</td>
                      <td>{candidate.years_exp.toString() || "N/A"}</td>
                      <td>{candidate.description || "N/A"}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  _candidates: state.candidates
});

const mapDispatchToProps = dispatch => ({
  _getCandidates: () => dispatch(getCandidates())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
