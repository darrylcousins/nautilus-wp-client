/*
 * Component to present sign in form
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const SignInForm = () => (
  <Form>
    <Form.Field
      id='form-textarea-control-name'
      control={Input}
      label='Name'
      placeholder='Your name'
    />
    <Form.Field
      id='form-textarea-control-email'
      control={Input}
      label='Email'
      placeholder='Your password'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    />
  </Form>
)

export default SignInForm

