/*
 * Component to display header menu.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
} from 'semantic-ui-react';

const HeaderMenu = () => {
  const pages = [
    { title: 'Home', slug: '/index' },
    { title: 'Braided Ropes', slug: '/braided-rope' },
    { title: 'Products', slug: '/products' },
    { title: 'Product Information', slug: '/product-information' },
    { title: 'Technical Data', slug: '/technical-data' },
    { title: 'Distributors', slug: '/distributors' },
    { title: 'About', slug: '/about' },
  ];
  return (
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
};

export default HeaderMenu;
