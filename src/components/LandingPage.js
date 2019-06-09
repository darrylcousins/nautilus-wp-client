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

const LandingPage = (props) => {
  const { data } = props;
  const { title, content } = data;
  return (
    <section className="pa3 pa5-ns bt b--black-10 bg-white">
      <header className="pv3">
        <h1 className="pv3">{ title }</h1>
      </header>
      <h1>Landing Page</h1>
      <content
        className="lh-copy measure"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
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
