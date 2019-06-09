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

const HeaderMenu = () => {
  const pages = [
    { title: 'Home', slug: '/index' },
    { title: 'Braided Ropes', slug: '/braided-rope' },
    { title: 'Products', slug: '/products' },
    { title: 'ProductInformation', slug: '/product-information' },
    { title: 'Technical Data', slug: '/technical-data' },
    { title: 'Distributors', slug: '/distributors' },
    { title: 'About', slug: '/about' },
  ];

  return (
    <header className="bg-black-90 fixed w-100 ph3 pv2 pv3-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        { pages.map(page => (
          <Link
            className="link dim white dib mr3"
            to={page.slug}
            key={page.slug}
          >
            { page.title }
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default HeaderMenu;
