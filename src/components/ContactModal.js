/*
 * Component to present contact modal
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react'
import { Modal, Icon } from 'semantic-ui-react'

const ContactModal = () => (
  <Modal
    trigger={<a className="item" href="#"><Icon name="linkify" />Contact</a>}
    header='Contact Us'
    content='Complete the form to send us a message.'
    actions={[{ key: 'done', content: 'Done', positive: true }]}
  />
)

export default ContactModal
