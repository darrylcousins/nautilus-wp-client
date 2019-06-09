/*
 * Component to display footer menu.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenu = () => (
  <footer className="bg-near-black white-80 fixed bottom-0 w-100 pv3 ph4">
    <p className="f5">
      <span className="dib mr4 mr5-ns">©2018 Nautilus Braids</span>
      <Link
        className="link mr2 white-80 hover-light-purple"
        to="/terms-of-use"
        key="terms-of-use"
      >
        Terms
      </Link>
      /
      <Link
        className="link mh2 white-80 hover-light-purple"
        to="/privacy-policy"
        key="privacy-policy"
      >
        Privacy Policy
      </Link>
      /
      <Link
        className="link ml2 white-80 hover-light-purple"
        to="mailto:rope@nautilusbraids.co.nz"
        key="email"
      >
        rope@nautilusbraids.co.nz
      </Link>
    </p>
  </footer>
);

export default FooterMenu;
