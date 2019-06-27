/*
 * Component to present sign in modal
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react'
import { Modal, Icon } from 'semantic-ui-react'

const SignInModal = () => (
  <Modal
    trigger={<a className="item" href="#"><Icon name="sign in" />Sign In</a>}
    header='Sign In'
    content='Complete the form to sign in.'
    actions={[{ key: 'done', content: 'Done', positive: true }]}
  />
)

export default SignInModal
