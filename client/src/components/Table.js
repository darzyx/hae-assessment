import React from "react";

const Table = ({ items }) => (
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
              <td>{ item.status || "N/A" }</td>
              <td>{ item.years_exp.toString() || "N/A" }</td>
              <td>{ item.description || "N/A" }</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
);

export default Table;
