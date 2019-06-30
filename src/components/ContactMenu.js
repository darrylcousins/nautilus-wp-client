/*
 * Component to display contact menu.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Fragment } from 'react';
import {
  Menu,
  Icon,
} from 'semantic-ui-react';

const ContactMenu = () => (
  <Fragment>
    <Menu.Item
      className="link link_no_padding"
    >
      <Icon name="phone" />
      <a
        className="link"
        href="tel:033295857"
      >
03 329 5857
      </a>
    </Menu.Item>
    <Menu.Item
      className="link link_padding_left"
    >
      <Icon name="mail" />
      <a
        className="link"
        href="mail:rope@nautilusbraids.co.nz"
      >
rope@nautilusbraids.co.nz
      </a>
    </Menu.Item>
  </Fragment>
);

export default ContactMenu;
