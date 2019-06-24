/*
 * Component to display header menu.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Icon,
} from 'semantic-ui-react';

const HeaderMenu = () => {
  const pages = [
    { title: 'Home', slug: '/index' },
    // { title: 'Braided Ropes', slug: '/braided-rope' },
    { title: 'Products', slug: '/products' },
    // { title: 'Product Information', slug: '/product-information' },
    // { title: 'Technical Data', slug: '/technical-data' },
    { title: 'Distributors', slug: '/distributors' },
    { title: 'About', slug: '/about' },
    { title: 'Contact', slug: '/contact' },
  ];

  const HeaderMenuMap = () => (
    pages.map(page => (
      <Menu.Item
        as={Link}
        to={page.slug}
        key={page.slug}
      >
        { page.title }
      </Menu.Item>
    ))
  );

  return (
    <Fragment>
      <HeaderMenuMap />
      <Menu.Item>
        <Icon name="sign-in" />
        <a
          href="mail:rope@nautilusbraids.co.nz"
        >
Sign In
        </a>
      </Menu.Item>
    </Fragment>
  );
};

export default HeaderMenu;
