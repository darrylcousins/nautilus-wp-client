/*
 * Component to present sign in form
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Component } from 'react';
import {
  Form,
  Input,
  Message,
} from 'semantic-ui-react';
import { emailRegex } from '../lib/Regex';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
    formError: false,
    formSuccess: false,
    formLoading: false,
    emailError: false,
    passwordError: false,
    submittedEmail: '',
    submittedPassword: '',
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { email, password } = this.state;
    const emailError = !emailRegex.test(email);
    const passwordError = password === '';
    this.setState({
      emailError,
      passwordError,
    });
    if (emailError || passwordError) {
      this.setState({
        formError: true,
        formLoading: false,
      });
    } else {
      this.setState({
        submittedEmail: email,
        submittedPassword: password,
        formSuccess: true,
        formError: false,
        formLoading: false,
      });
    }
  }

  render() {
    const {
      email,
      password,
      formError,
      formSuccess,
      formLoading,
      emailError,
      passwordError,
      submittedEmail,
      submittedPassword,
    } = this.state;
    return (
      <Form
        error={formError}
        success={formSuccess}
        loading={formLoading}
        onSubmit={this.handleSubmit}
      >
        <Message
          success
          content="Thank you, welcome."
        />
        <Message
          error={emailError}
          hidden
          content="Please enter a valid email."
        />
        <Form.Field
          required
          id="form-textarea-control-email"
          error={emailError}
          name="email"
          value={email}
          control={Input}
          icon="user"
          iconPosition="left"
          placeholder="Enter email..."
          autoComplete="username-email"
          type="text"
          label="Email"
          onChange={this.handleChange}
        />
        <Message
          error={passwordError}
          hidden
          content="Please enter a password."
        />
        <Form.Field
          required
          id="form-textarea-control-password"
          error={passwordError}
          name="password"
          value={password}
          control={Input}
          icon="lock"
          iconPosition="left"
          placeholder="Enter password..."
          autoComplete="current-password"
          type="password"
          label="Password"
          onChange={this.handleChange}
        />
        <Message
          error
          header="Sorry the data does not validate."
          content="Valid email and password please."
        />
      </Form>
    );
  }
}

export default SignInForm;
