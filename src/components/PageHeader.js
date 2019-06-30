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
  Responsive,
} from 'semantic-ui-react';
import NautilusIcon from './NautilusIcon';
import ContactMenu from './ContactMenu';
import SearchInput from './SearchInput';
import getWidth from '../lib/GetWidth';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landing: props.landing,
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

  render() {
    const { landing } = this.state;
    const header1 = 'Nautilus Braids';
    const header2 = 'Makers of high performance braided rope';
    const iconColor = '#E3DAC9';
    return (
      <div>
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: landing ? 700 : 30,
            }}
            vertical
          >
            <SearchInput />
            <Header
              inverted
              as="h1"
              textAlign={landing ? 'center' : 'left'}
              style={landing ? { marginTop: '5em' } : { margin: '0em 0em 0em 2em' }}
            >
              <NautilusIcon
                scaleNumber={landing ? 2 : 1}
                color={iconColor}
              />
              <Header.Content
                className={landing ? 'pageheaderh1 desktop landing' : 'pageheaderh1 desktop'}
              >
                { header1 }
                <Header.Subheader className="tl">
                  <Header.Content
                    className={landing ? 'pageheaderh2 desktop landing' : 'pageheaderh2 desktop'}
                  >
                    { header2 }
                  </Header.Content>
                </Header.Subheader>
                <Menu
                  inverted
                  borderless
                  size={landing ? 'large' : 'tiny'}
                  style={{
                    paddingLeft: '1em',
                  }}
                >
                  <ContactMenu />
                </Menu>
              </Header.Content>
            </Header>
          </Segment>
        </Responsive>
        <Responsive
          getWidth={getWidth}
          maxWidth={Responsive.onlyTablet.minWidth}
        >
          <Segment
            textAlign="center"
            inverted
            vertical
          >
            <SearchInput />
            <Header
              as="h1"
              textAlign="left"
              style={{ marginLeft: '1em' }}
            >
              <NautilusIcon
                scaleNumber={landing ? 1 : 0.8}
                color={iconColor}
              />
              <Header.Content
                className={landing ? 'pageheaderh1 mobile landing' : 'pageheaderh1 mobile'}
              >
                { header1 }
                <Header.Subheader style={{ textAlign: 'left' }}>
                  <Header.Content
                    className={landing ? 'pageheaderh2 mobile landing' : 'pageheaderh2 mobile'}
                  >
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
        </Responsive>
      </div>
    );
  }
}

PageHeader.defaultProps = { landing: false };

PageHeader.propTypes = {
  landing: PropTypes.bool,
};

export default PageHeader;
