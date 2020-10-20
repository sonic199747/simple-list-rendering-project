import React, { Component } from "react";

class SelectInput extends Component {
  render() {
    const { name, label, genre, error, ...rest } = this.props;
    return (
      <div className="form-group">
        <label>{label}</label>
        <select className="form-control" name={name} id={name} {...rest}>
          <option value="">Choose...</option>
          {genre.map((g) => (
            <option key={g._id} value={g._id}>
              {g.name}
            </option>
          ))}
        </select>
        {error ? <div className="alert alert-danger">{error}</div> : null}
      </div>
    );
  }
}

export default SelectInput;
