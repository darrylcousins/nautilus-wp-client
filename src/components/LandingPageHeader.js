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

/* Like the PageHeader but smaller */
const LandingPageHeader = ({ mobile, landing }) => (
  <Container text>
    <Header
      as="h1"
      content="Nautilus Braids"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="High performance braided rope"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
);

LandingPageHeader.defaultProps = { mobile: false };

LandingPageHeader.propTypes = {
  mobile: PropTypes.bool,
};

export default LandingPageHeader;
