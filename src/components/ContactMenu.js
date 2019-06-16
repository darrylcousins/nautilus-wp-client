/*
 * Component to display contact menu.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Icon,
} from 'semantic-ui-react';

const ContactMenu = () => {
  return (
    <Fragment>
      <Menu.Item>
        <Icon name="phone" />
        <a href="tel:03324444">03 324 444</a>
      </Menu.Item>
      <Menu.Item>
        <Icon name="at" />
        <a href="mail:rope@nautilusbraids.co.nz">rope@nautilusbraids.co.nz</a>
      </Menu.Item>
    </Fragment>
  );
};

export default ContactMenu;

