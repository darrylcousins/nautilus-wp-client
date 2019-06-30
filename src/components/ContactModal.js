/*
 * Component to present contact modal
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
import ContactForm from './ContactForm';
import NautilusIcon from './NautilusIcon';

class ContactModal extends Component {
  state = { modalOpen: false }

  createdRef = createRef();

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleFormSubmit = () => {
    console.log(this.createdRef.current);
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
            <Icon name="linkify" style={{ marginLeft: '0.8rem' }}/>
            Contact
          </Button>
        )}
      >
        <Modal.Header className="f3">
          <NautilusIcon color="#131313" scaleNumber={0.7} />
          Contact us ...
        </Modal.Header>
        <Modal.Content>
          <Container>
            <ContactForm ref={this.createdRef} />
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
                icon="send"
                content="Send"
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

export default ContactModal;
