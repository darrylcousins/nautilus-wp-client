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
  Segment,
  Header,
  Menu,
  Visibility,
} from 'semantic-ui-react';
import NautilusIcon from './NautilusIcon';
import ContactMenu from './ContactMenu';
import SearchInput from './SearchInput';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.state = {
      landing: props.landing,
      fixed: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { landing } = this.props;
    if (nextProps.landing !== landing) {
      this.setState({
        landing: nextProps.landing,
      });
    }
  }

  hideFixedMenu() { this.setState({ fixed: false }); }

  showFixedMenu() { this.setState({ fixed: true }); }

  render() {
    const { landing, fixed } = this.state;
    const header1 = 'Nautilus Braids';
    const header2 = 'Makers of high performance braided rope';
    const iconColor = '#E3DAC9';
    return (
      <div>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: landing ? 700 : 30,
            }}
            vertical
            className={fixed ? 'fixed' : ''}
          >
            <SearchInput />
            <Header
              as="h1"
              size="huge"
              textAlign="left"
            >
              <NautilusIcon
                scaleNumber={landing ? 1 : 0.8}
                color={iconColor}
              />
              <Header.Content className="pageheader1">
                { header1 }
                <Header.Subheader>
                  <Header.Content className="pageheader2">
                    { header2 }
                  </Header.Content>
                </Header.Subheader>
                <Menu
                  stackable
                  borderless
                  inverted
                  size="tiny"
                  style={{
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  <ContactMenu />
                </Menu>
              </Header.Content>
            </Header>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

PageHeader.defaultProps = { landing: false };

PageHeader.propTypes = {
  landing: PropTypes.bool,
};

export default PageHeader;
