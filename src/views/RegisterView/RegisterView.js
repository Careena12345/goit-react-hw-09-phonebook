import React, { Component } from "react";
import shortid from "shortid";
import withAuth from "../../components/hoc/withAuth";
import Section from "../../components/Section";
import { FormField, FormButton } from "../../components/Form";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  idName = shortid.generate();
  idPassword = shortid.generate();
  idEmail = shortid.generate();

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <Section>
          <form onSubmit={this.handleSubmit} className="form">
            <FormField
              label="Name"
              type="text"
              placeholder="Enter user name*"
              value={name}
              handleChange={this.handleChange}
              name="name"
              id={this.idName}
            />
            <FormField
              label="Email"
              type="email"
              placeholder="Enter user email*"
              value={email}
              handleChange={this.handleChange}
              name="email"
              id={this.idEmail}
            />
            <FormField
              label="Password"
              type="password"
              placeholder="Enter user email*"
              value={password}
              handleChange={this.handleChange}
              name="password"
              id={this.idPassword}
            />
            <FormButton type="submit" buttonLabel="Register" />
          </form>
        </Section>
      </>
    );
  }
}

export default withAuth(RegisterView);
