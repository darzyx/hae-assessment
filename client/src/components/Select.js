import React from "react";
import PropTypes from "prop-types";

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

Select.propTypes = {
  val: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default Select;
