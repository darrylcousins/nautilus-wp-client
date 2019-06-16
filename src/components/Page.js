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
  Segment,
  Container,
  Header,
  Image,
  List,
} from 'semantic-ui-react';
import PageHeader from './PageHeader';
import fetchPromise from '../lib/DataFetch';
import NautilusIcon from './NautilusIcon';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landing: false,
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
    const landing = Page.isLandingPage(this.props);
    this.setState({ landing });
    const slug = Page.getSlugFromMatch(this.props);
    this.loadAsyncData(slug);
  }

  /*
   * https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#fetching-external-data-when-props-change
   */
  componentWillReceiveProps(nextProps) {
    const { match } = this.props;
    if (nextProps.match.params !== match.params) {
      const slug = Page.getSlugFromMatch(nextProps);
      //const landing = slug === 'index';
      const landing = Page.isLandingPage(nextProps);
      console.log('Changed props, landing: ', landing);
      this.setState({
        externalData: null,
        landing,
      });
      this.loadAsyncData(slug);
    }
  }

  componentWillUnmount() {
    if (this.asyncRequest && 'cancel' in this.asyncRequest) {
      this.asyncRequest.cancel();
    }
  }

  /*
   * matches '/' root only
   */
  static isLandingPage(props) {
    const urlParams = props.match.params;
    return !('slug' in urlParams);
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
      .catch((error) => {
        console.error(error);
        this.setState({ externalData: { title: `${error}` } });
      });
  }

  render() {
    const { landing, externalData } = this.state;
    if (externalData === null) return <Dimmer active><Loader /></Dimmer>;

    return (
      <div>
          <PageHeader landing={ landing } />
          <Container
            style={{
              paddingTop: '2em',
            }}
          >
            <Header
              as="h1"
            >
              { externalData.title }
            </Header>
            <p
              dangerouslySetInnerHTML={{ __html: externalData.content }}
            />
          </Container>
      </div>
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
