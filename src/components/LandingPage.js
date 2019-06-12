/*
 * Component to display landing page /index.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import PropTypes from 'prop-types';
import LandingPageHeader from './LandingPageHeader';

const LandingPage = (props) => {
  return (
      <LandingPageHeader />
  );
};

LandingPage.defaultProps = { data: {} };

LandingPage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default LandingPage;
