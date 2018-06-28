import React from "react";
import PropTypes from "prop-types";

const Table = ({ items, patchCandidate }) => (
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
          items.map((item, key) =>
            <tr key={key}>
              <td>{ item.name || "N/A" }</td>
              <td>{ [new Date(item.date_applied)].toString() || "N/A" }</td>
              <td>{ item.reviewed ? "yes" : "no" }</td>
              <td>
              {
                item.status === "pending" ?
                  <select
                    value={item.status}
                    onChange={(e) => patchCandidate(item.id, e.target.value)}
                  >
                    <option value="pending">pending</option>
                    <option value="accepted">accepted</option>
                    <option value="rejected">rejected</option>
                  </select> :
                item.status || "N/A"
              }
              </td>
              <td>{ item.years_exp.toString() || "N/A" }</td>
              <td>{ item.description || "N/A" }</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  items: PropTypes.array.isRequired,
  patchCandidate: PropTypes.func.isRequired
};

export default Table;
