/*
 * Component to collect data from wordpress using graphql and present content.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import {
  Loader,
  Dimmer,
} from 'semantic-ui-react';
import fetchPromise from '../lib/DataFetch';
import ResponsiveContainer from './ResponsiveContainer';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      externalData: {
        title: '',
        date: '',
        slug: '',
        excerpt: '',
        content: '',
      },
    };
  }

  componentDidMount() {
    const slug = Page.getSlugFromMatch(this.props);
    this.loadAsyncData(slug);
  }

  /*
   * https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#fetching-external-data-when-props-change
   */
  componentWillReceiveProps(nextProps) {
    const { match } = this.props;
    if (nextProps.match.params !== match.params) {
      this.setState({ externalData: null });
      const slug = Page.getSlugFromMatch(nextProps);
      this.loadAsyncData(slug);
    }
  }

  componentWillUnmount() {
    if (this.asyncRequest && 'cancel' in this.asyncRequest) {
      this.asyncRequest.cancel();
    }
  }

  static getSlugFromMatch(props) {
    const urlParams = props.match.params;
    const slug = 'slug' in urlParams ? urlParams.slug : 'index';
    return slug;
  }

  loadAsyncData(slug) {
    const body = JSON.stringify({
      variables: {
        first: 1,
        where: { name: slug },
      },
      query: `
        query GET_PAGES($first: Int, $where: RootQueryToPageConnectionWhereArgs!) {
          pages(first: $first, where: $where) {
            edges {
              node {
                title
                slug
                content
                excerpt
                date
              }
            }
          }
        }
      `,
    });

    this.asyncRequest = fetchPromise(body)
      .then(res => res.json())
      .then(res => this.setState({ externalData: res.data.pages.edges[0].node }))
      .catch(error => console.error(error));
  }

  render() {
    const { externalData } = this.state;
    if (externalData === null) return <Dimmer active><Loader /></Dimmer>;
    //if (externalData.slug === 'index') return <LandingPage data={externalData} />;
    return (
      <section className="pa3 pa5-ns bt b--black-10 bg-white">
        <header className="pv3">
          <h1 className="pv3">{externalData.title}</h1>
        </header>
        <content
          className="lh-copy measure"
          dangerouslySetInnerHTML={{ __html: externalData.content }}
        />
      </section>
    );
  }
}

Page.propTypes = {
  // history: ReactRouterPropTypes.history.isRequired,
  // location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  // route: ReactRouterPropTypes.route.isRequired, // for react-router-config
};

export default Page;
