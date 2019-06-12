/*
 * Async fetch graphql data from wordpress
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import { Responsive } from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  console.log(window.location.pathname);

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export default getWidth;
