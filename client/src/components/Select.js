import React from "react";

const Select = ({ val, onChange, options }) => (
  <select
    value={val}
    onChange={(e) => onChange(e.target.value)}
  >
    {
      options.map((option, key) =>
        <option value={option} key={key}>{option}</option>
      )
    }
  </select>
);

export default Select;
