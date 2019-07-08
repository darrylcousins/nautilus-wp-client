/*
 * Component to present search results
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Label,
  Icon,
} from 'semantic-ui-react';

const SearchResultRenderer = ({ title, description }) => (
  <Label
    className="search"
    as={Link}
    to={title}
  >
    <Icon name="linkify" />
    { description }
  </Label>
);

SearchResultRenderer.defaultProps = {
  node: {},
};
SearchResultRenderer.propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default SearchResultRenderer;
