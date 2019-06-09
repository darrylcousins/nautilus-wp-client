/*
 * Component to display landing page /index.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import LandingPageHeader from './LandingPageHeader';

const LandingPage = (props) => {
  const { data } = props;
  const { title, content } = data;
  const style = {
    h1: { marginTop: '3em' },
  }
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
