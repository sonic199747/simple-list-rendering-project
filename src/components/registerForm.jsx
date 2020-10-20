import React from "react";
import Input from "./input";
import Form from "./form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={this.state.data.username}
            label="Username"
            onChange={this.handleChange}
            error={this.state.errors.username}
            type="email"
          />
          <Input
            name="password"
            value={this.state.data.password}
            label="Password"
            onChange={this.handleChange}
            error={this.state.errors.password}
            type="password"
          />
          <Input
            name="name"
            value={this.state.data.password}
            label="Name"
            onChange={this.handleChange}
            error={this.state.errors.password}
            type="text"
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
