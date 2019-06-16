/*
 * Component to display container for mobile views.
 * https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Ref,
} from 'semantic-ui-react';
import PageHeader from './PageHeader';
import getWidth from '../lib/GetWidth';
import HeaderMenu from './HeaderMenu';

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSideBarHide = this.handleSideBarHide.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.segmentRef = createRef();
    this.state = {};
  }

  handleSideBarHide() { this.setState({ sidebarOpened: false }); }

  handleToggle() { this.setState({ sidebarOpened: true }); }

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSideBarHide}
          onClick={this.handleSideBarHide}
          vertical
          visible={sidebarOpened}
        >
          <HeaderMenu />
        </Sidebar>

        <Sidebar.Pusher
          dimmed={sidebarOpened}
        >
          <Segment
            textAlign="center"
            vertical
            style={{
              borderBottom: 'none',
              textAlign: 'left',
            }}
          >
              <Menu
                pointing
                secondary
                style={{
                  borderBottom: 'none',
                  display: 'inline',
                  textAlign: 'left',
                }}
              >
                <Menu.Item
                  onClick={this.handleToggle}
                  style={{
                    display: 'inline',
                  }}
                >
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.defaultProps = { children: {} };

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export default MobileContainer;
