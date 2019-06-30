/*
 * Component to present search input
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import _ from 'lodash';
import React, { Component } from 'react';
import fetchPromise from '../lib/DataFetch';
import Search from './Search';
import SearchResultRenderer from './SearchResultRenderer';

const initialState = { isLoading: false, results: [], value: '' };

class SearchInput extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  componentWillUnmount = () => {
    if (this.asyncRequest && 'cancel' in this.asyncRequest) {
      this.asyncRequest.cancel();
    }
  }

  handleSearchChange = (e, { input }) => {
    this.setState({ isLoading: true, value: input });

    setTimeout(() => {
      const { value } = this.state;
      if (value.length < 1) return this.setState(initialState);

      const body = JSON.stringify({
        variables: {
          where: { search: input },
        },
        query: `
          query GET_PAGES($where: RootQueryToPageConnectionWhereArgs!) {
            pages(where: $where) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `,
      });

      this.asyncRequest = fetchPromise(body)
        .then(res => res.json())
        .then(res => this.setState({
          results: res.data.pages.edges,
          isLoading: false,
        }))
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    }, 300);
  }

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Search
        placeholder="Search ..."
        className="inverted fr mr5"
        aligned="right"
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        resultRenderer={SearchResultRenderer}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}

export default SearchInput;
