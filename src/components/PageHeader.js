/*
 * Component to display landing page header
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';

/* Like the LandingPageHeader but smaller */
const PageHeader = ({ mobile, landing }) => (
  <Container text>
    <Header
      as="h1"
      content="Nautilus Braids"
      inverted
      style={{
        fontSize: mobile || !landing ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile || !landing ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="High performance braided rope"
      inverted
      style={{
        fontSize: mobile || !landing ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile || !landing ? '0.5em' : '1.5em',
      }}
    />
  </Container>
);

PageHeader.defaultProps = { mobile: false };

PageHeader.propTypes = {
  mobile: PropTypes.bool,
};

export default PageHeader;

