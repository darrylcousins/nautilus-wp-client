/*
 * Component to display page header
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Loader,
  Dimmer,
  Segment,
  Container,
  Header,
  Image,
  List,
  Menu,
  Icon,
  Responsive,
} from 'semantic-ui-react';
import NautilusIcon from './NautilusIcon';
import ContactMenu from './ContactMenu';
import PageHeader from './ContactMenu';
import getWidth from '../lib/GetWidth';

class LandingPage extends Component {
  render() {
    console.log(this.props.data);
    return (
      <PageHeader landing={true} />
    )
  }
}

export default LandingPage;

