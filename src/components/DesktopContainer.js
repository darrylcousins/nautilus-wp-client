/*
 * Component to display container for desktop views.
 * https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import HeaderMenu from './HeaderMenu';
import getWidth from '../lib/GetWidth';

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.state = { fixed: false };
  }

  hideFixedMenu() { this.setState({ fixed: false }); }

  showFixedMenu() { this.setState({ fixed: true }); }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <Visibility
          once={false}
          onTopPassed={this.showFixedMenu}
          onTopPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            vertical
          >
            <Menu
              inverted
              fixed="top"
            >
              <HeaderMenu />
            </Menu>
          </Segment>
        </Visibility>

        {children}

      </Responsive>
    );
  }
}

DesktopContainer.defaultProps = { children: {} };

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
