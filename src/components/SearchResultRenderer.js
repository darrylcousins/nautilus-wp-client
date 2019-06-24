/*
 * Component to present search results
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
  Label,
  Icon,
} from 'semantic-ui-react';
import fetchPromise from '../lib/DataFetch';
import Search from './Search';

const SearchResultRenderer = ({ node }) => {

  return (
    <Label
      className="search"
      as={Link}
      to={node.slug}
    >
      <Icon name="linkify" />
      { node.title }
    </Label>
  );
};

SearchResultRenderer.propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }),
};

export default SearchResultRenderer;
