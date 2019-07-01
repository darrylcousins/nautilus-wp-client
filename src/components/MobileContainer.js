/*
 * Component to display container for mobile views.
 * https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import getWidth from '../lib/GetWidth';
import HeaderMenu from './HeaderMenu';

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSideBarHide = this.handleSideBarHide.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.state = {
      sidebarOpened: false,
      fixed: false,
    };
  }

  handleSideBarHide() { this.setState({ sidebarOpened: false }); }

  handleToggle() { this.setState({ sidebarOpened: true }); }

  hideFixedMenu() { this.setState({ fixed: false }); }

  showFixedMenu() { this.setState({ fixed: true }); }

  render() {
    const { children } = this.props;
    const { fixed, sidebarOpened } = this.state;

    return (
      <Responsive
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
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              textAlign="center"
              vertical
              inverted
            >
              <Menu
                inverted
                fixed={fixed ? 'top' : null}
                pointing={!fixed}
                secondary={!fixed}
              >
                <Menu.Item
                  onClick={this.handleToggle}
                >
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Segment>
          </Visibility>
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
