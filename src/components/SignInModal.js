/*
 * Component to present sign in modal
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Component, createRef } from 'react';
import {
  Modal,
  Icon,
  Button,
  Container,
} from 'semantic-ui-react';
import SignInForm from './SignInForm';
import NautilusIcon from './NautilusIcon';

class SignInModal extends Component {
  state = { modalOpen: false }

  createdRef = createRef();

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleFormSubmit = () => {
    this.createdRef.current.handleSubmit();
  }

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={(
          <Button
            onClick={this.handleOpen}
            className="link inverted"
          >
            <Icon name="sign in" />
            Sign In
          </Button>
        )}
      >
        <Modal.Header>
          <NautilusIcon color="#131313" scaleNumber={0.7} />
          Sign in ...
        </Modal.Header>
        <Modal.Content>
          <Container>
            <SignInForm ref={this.createdRef} />
          </Container>
        </Modal.Content>
            <Modal.Actions>
              <Container>
                <Button.Group>
                  <Button
                    id="form-button-control-cancel"
                    icon="times"
                    content="Cancel"
                    color="red"
                    onClick={this.handleClose}
                  />
                  <Button
                    id="form-button-control-confirm"
                    icon="sign in"
                    content="Sign In"
                    color="blue"
                    onClick={this.handleFormSubmit}
                  />
                </Button.Group>
              </Container>
            </Modal.Actions>
      </Modal>
    );
  };
};

export default SignInModal;
