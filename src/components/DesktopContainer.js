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
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import PageHeader from './PageHeader';
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
    const { children, slug } = this.props;
    const { fixed } = this.state;
    const landing = slug === "index";
    console.log("Slug", slug);

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: landing ? 700 : 0, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <HeaderMenu />
              </Container>
            </Menu>
            <PageHeader landing={ landing } />
          </Segment>
          {children}
        </Visibility>

      </Responsive>
    );
  }
}

DesktopContainer.defaultProps = { children: {} };

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
