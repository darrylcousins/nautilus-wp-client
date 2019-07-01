/*
 * Component to present contact form
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
import { emailRegex, nameRegex, messageRegex } from '../lib/Regex';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    formError: false,
    formSuccess: false,
    formLoading: false,
    nameError: false,
    emailError: false,
    messageError: false,
    submittedName: '',
    submittedEmail: '',
    submittedMessage: '',
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name, email, message } = this.state;
    const nameError = !nameRegex.test(name);
    const emailError = !emailRegex.test(email);
    const messageError = !messageRegex.test(message);
    this.setState({
      nameError,
      emailError,
      messageError,
    });
    if (nameError || emailError || messageError) {
      this.setState({
        formError: true,
        formLoading: false,
      });
    } else {
      this.setState({
        submittedName: name,
        submittedEmail: email,
        submittedMessage: message,
        formSuccess: true,
      });
    }
  }

  render() {
    const {
      name,
      email,
      message,
      formError,
      formSuccess,
      formLoading,
      nameError,
      emailError,
      messageError,
      submittedName,
      submittedEmail,
      submittedMessage,
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
          header="Your message submitted."
          content="Thank you, we will reply shortly."
        />
        <Message
          error={nameError}
          hidden
          content="Please enter a valid name."
        />
        <Form.Field
          required
          error={nameError}
          id="form-textarea-control-name"
          name="name"
          value={name}
          control={Input}
          icon="user"
          iconPosition="left"
          placeholder="Your name..."
          type="text"
          label="Your name"
          onChange={this.handleChange}
        />
        <Message
          error={emailError}
          hidden
          content="Please enter a valid email."
        />
        <Form.Field
          required
          error={emailError}
          id="form-textarea-control-email"
          name="email"
          value={email}
          control={Input}
          icon="at"
          iconPosition="left"
          placeholder="Your email..."
          type="text"
          label="Your email"
          onChange={this.handleChange}
        />
        <Message
          error={messageError}
          hidden
          content="Please enter a message."
        />
        <Form.Field
          required
          error={messageError}
          id="form-textarea-control-message"
          name="message"
          value={message}
          control={Form.TextArea}
          placeholder="Your message..."
          label="Your message to us"
          onChange={this.handleChange}
        />
        <Message
          error
          header="Sorry the data does not validate."
          content="Name, email, and message please."
        />
      </Form>
    );
  }
}

export default ContactForm;
