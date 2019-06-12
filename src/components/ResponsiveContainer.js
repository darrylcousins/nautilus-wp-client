/*
 * Component to act as global container for all content
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = (props) => {
  const { children } = props;
  const slug = new String(window.location.pathname).slice(1);
  console.log("My slug", slug);
  return (
    <div>
      <DesktopContainer slug={slug} {...props}>{children}</DesktopContainer>
      <MobileContainer slug={slug} {...props}>{children}</MobileContainer>
    </div>
  )
}

ResponsiveContainer.defaultProps = { children: {} };

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer;
