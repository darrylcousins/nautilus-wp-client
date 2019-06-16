/*
 * Component to display landing page header
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
import getWidth from '../lib/GetWidth';

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
              minHeight: landing ? 600 : 30,
            }}
            vertical
          >
            <Header
              as="h1"
              textAlign={landing ? "center" : "left"}
              inverted
              style={{
                fontSize: landing ? '5em' : '2em',
                paddingTop: landing ? '2em' : '0em',
                paddingLeft: landing ? '0em' : '2em',
              }}
            >
              <NautilusIcon
                scaleNumber={landing ? 2 : 1}
                color="#ffffff"
              />
              <Header.Content>
                Nautilus Braids
                <Header.Subheader
                  style={{
                    fontSize: landing ? '0.4em' : '0.4em',
                    color: 'grey',
                    textAlign: 'left',
                    paddingLeft: '0.2em',
                  }}
                >
                  High performance braided rope
                </Header.Subheader>
                <Menu
                  inverted
                  borderless
                  size="large"
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
            style={{
              minHeight: landing ? 150 : 30,
            }}
            vertical
          >
            <Header
              as="h1"
              textAlign={landing ? "center" : "left"}
              style={{
                fontSize: landing ? '2em' : '2em',
                paddingTop: '0em',
                paddingLeft: landing ? '0em' : '2em',
              }}
            >
              <NautilusIcon
                scaleNumber={landing ? 1 : 0.8}
                color="#000000"
              />
              <Header.Content>
                Nautilus Braids
                <Header.Subheader
                  style={{
                    fontSize: landing ? '0.4em' : '0.4em',
                    color: 'grey',
                    textAlign: 'left',
                    paddingLeft: '0.2em',
                  }}
                >
                  High performance braided rope
                </Header.Subheader>
                <Menu
                  stackable
                  borderless
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
