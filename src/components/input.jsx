import React from "react";

function Input(props) {
  const { name, value, label, onChange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        onChange={onChange}
        defaultValue={value}
        type="text"
        className="form-control"
        id={label}
        name={name}
      />
      {error ? <div className="alert alert-danger">{error}</div> : null}
    </div>
  );
}

export default Input;
