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
import styles from '../lib/Styles'

const ContactMenu = () => {
  return (
    <Fragment>
      <Menu.Item
        style={styles.link}
      >
        <Icon name="phone" />
        <a
          style={styles.link_no_padding}
          href="tel:03324444"
        >03 324 444</a>
      </Menu.Item>
      <Menu.Item
        style={styles.link_no_padding}
      >
        <Icon name="mail" />
        <a 
          style={styles.link}
          href="mail:rope@nautilusbraids.co.nz"
        >rope@nautilusbraids.co.nz</a>
      </Menu.Item>
    </Fragment>
  );
};

export default ContactMenu;

