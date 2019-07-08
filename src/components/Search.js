/*
 * Component to present search bar
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import {
  Search as SemanticSearch,
  SearchResult,
  SearchResults,
  Input,
} from 'semantic-ui-react';

class Search extends SemanticSearch {
  /*
   * overide input render to make inverted and transparent
   */
  renderSearchInput = (rest) => {
    const { icon, input } = this.props;
    const { value } = this.state;

    return Input.create(input, {
      autoGenerateKey: false,
      defaultProps: {
        ...rest,
        icon,
        className: 'inverted transparent',
        input: { className: 'prompt', tabIndex: '0', autoComplete: 'off' },
        onChange: this.handleSearchChange,
        onClick: this.handleInputClick,
        value,
      },
    });
  }

  /*
   * overide input render to make inverted and transparent
   */
  renderResultsMenu = () => {
    const { open } = this.state;
    const resultsClasses = open ? 'visible inverted' : '';
    const menuContent = this.renderMenuContent();

    if (!menuContent) return;

    return (
      <SearchResults className={resultsClasses}>{menuContent}</SearchResults>
    );
  }

  /*
   * overide input render to make inverted and transparent
   */
  renderNoResults = () => {
    const { noResultsDescription, noResultsMessage } = this.props;

    return (
      <div className="message empty">
        <div className="header inverted">{noResultsMessage}</div>
        {noResultsDescription && <div className="description">{noResultsDescription}</div>}
      </div>
    );
  }

  /*
   * overide input render to make inverted and transparent
   */
  renderResult = ({ childKey, ...result }, index, _array, offset = 0) => {
    const { resultRenderer } = this.props;
    const { selectedIndex } = this.state;
    const offsetIndex = index + offset;

    return (
      <SearchResult
        key={childKey || result.title}
        active={selectedIndex === offsetIndex}
        onClick={this.handleItemClick}
        onMouseDown={this.handleItemMouseDown}
        renderer={resultRenderer}
        className="inverted transparent"
        {...result}
        id={offsetIndex}
      />
    );
  }
}

export default Search;
