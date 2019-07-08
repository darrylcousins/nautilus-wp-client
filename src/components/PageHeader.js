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
  Grid,
  Sidebar,
} from 'semantic-ui-react';
import NautilusIcon from './NautilusIcon';
import ContactMenu from './ContactMenu';
import SearchInput from './SearchInput';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.hideHeader = this.hideHeader.bind(this);
    this.showHeader = this.showHeader.bind(this);
    this.state = {
      landing: props.landing,
      visible: false,
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

  hideHeader() { this.setState({ visible: false }); }

  showHeader() { this.setState({ visible: true }); }

  render() {
    const { landing, visible } = this.state;
    const header1 = 'Nautilus Braids';
    const header2 = 'Makers of high performance braided rope';
    const iconColor = '#E3DAC9';
    const iconMultiplier = landing ? (visible ? 0.3 : 1) : (visible ? 0.4 : 0.8);
    return (
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: landing ? 700 : 30,
          }}
          vertical
          className={visible ? 'fixed' : ''}
        >
          <Grid>
            <Grid.Row columns="2">
              <Grid.Column>
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
              </Grid.Column>
              <Grid.Column>
                <SearchInput />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header
            inverted
            as="h1"
            size="huge"
            textAlign="left"
            style={{ margin: "0rem 1rem 0rem 1rem" }}
          >
          <NautilusIcon
            scaleNumber={iconMultiplier}
            color={iconColor}
          />
          <Header.Content className="pageheader1">
            { header1 }
            <Header.Subheader>
              <Header.Content className="pageheader2">
                { header2 }
              </Header.Content>
            </Header.Subheader>
          </Header.Content>
        </Header>
      </Segment>
    );
  }
}

PageHeader.defaultProps = { landing: false };

PageHeader.propTypes = {
  landing: PropTypes.bool,
};

export default PageHeader;
