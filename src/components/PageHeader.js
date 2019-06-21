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
  Input,
  Responsive,
} from 'semantic-ui-react';
import NautilusIcon from './NautilusIcon';
import ContactMenu from './ContactMenu';
import getWidth from '../lib/GetWidth';
import styles from '../lib/Styles'

class PageHeader extends Component {
  constructor(props) {
    super(props);
    console.log('My props in pageheader: ', props);
    this.state =  {
      landing: props.landing,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { landing } = this.props;
    if (nextProps.landing !== landing) {
      this.setState({
        landing: nextProps.landing
      });
    }
  }
  
  render() {
    const { landing } = this.state;
    console.log('Header landing ', landing);
    const header1 = 'Nautilus Braids';
    const header2 = 'Makers of high performance braided rope';
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
            <Input
              inverted
              transparent
              icon="search"
              size="large"
              placeholder='Search...'
              className="fr mr7 pa0"
            />
            <Header
              inverted
              as="h1"
              textAlign={landing ? "center" : "left"}
              style={landing ? styles.pageheaderh1_desktop_landing : styles.pageheaderh1_desktop}
            >
              <NautilusIcon
                scaleNumber={landing ? 2 : 1}
                color="#AAA9AD"
              />
              <Header.Content>
                { header1 }
                <Header.Subheader
                  style={landing ? styles.pageheaderh2_desktop_landing : styles.pageheaderh2_desktop}
                >
                  { header2 }
                </Header.Subheader>
                <Menu
                  inverted
                  borderless
                  size={landing ? "large" : "tiny"}
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
            style={{
              minHeight: landing ? 700 : 30,
            }}
            vertical
          >
            <Header
              as="h1"
              textAlign={landing ? "center" : "left"}
              style={landing ? styles.pageheaderh1_mobile_landing : styles.pageheaderh1_mobile}
            >
              <NautilusIcon
                scaleNumber={landing ? 1 : 0.8}
                color="#AAA9AD"
              />
              <Header.Content>
                { header1 }
                <Header.Subheader
                  style={landing ? styles.pageheaderh2_mobile_landing : styles.pageheaderh2_mobile}
                >
                  { header2 }
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
