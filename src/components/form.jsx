import { Component } from "react";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const errors = {};
    if (this.state.data.username === "")
      errors.username = "Username is required.";
    if (this.state.data.password === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = (input) => {
    if (input.name === "username") {
      if (input.value === "") return "Username is required.";
    }
    if (input.name === "password") {
      if (input.value === "") return "Password is required.";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);
    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    data[e.target.name] = e.target.value;
    this.setState({ data, errors });
  };
}

export default Form;
