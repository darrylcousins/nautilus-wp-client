/*
 * Component to collect data from wordpress using graphql and present content.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React, { Component, Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import {
  Loader,
  Dimmer,
  Container,
  Header,
  Card,
} from 'semantic-ui-react';
import fetchPromise from '../lib/DataFetch';
import PageHeader from './PageHeader';

class Page extends Component {
  static isLandingPage(props) {
    const urlParams = props.match.params;
    return !('slug' in urlParams);
  }

  static getSlugFromMatch(props) {
    const urlParams = props.match.params;
    const slug = 'slug' in urlParams ? urlParams.slug : 'index';
    return slug;
  }

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
      // const landing = slug === 'index';
      const landing = Page.isLandingPage(nextProps);
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

  loadAsyncData(slug) {
    const body = JSON.stringify({
      variables: {
        first: 1,
        where: { name: slug },
        // where: { search: 'tenacity' },
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
        // console.error(error);
        this.setState({ externalData: { title: `${error}` } });
      });
  }

  render() {
    const { landing, externalData } = this.state;
    if (externalData === null) return <Dimmer active><Loader /></Dimmer>;

    const slug = Page.getSlugFromMatch(this.props);
    const Content = ({ title, content }) => {
      if (!landing && slug !== 'index') {
        return (
          <Fragment>
            <Header as="h1">{ title }</Header>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Fragment>
        );
      }
      const dom = new DOMParser().parseFromString(content, 'text/html');
      const titles = dom.querySelectorAll('h2');
      const count = titles.length > 2 ? 3 : titles.length;
      let i;
      let el;
      const items = [];
      for (i = 0; i < count; i++) {
        el = titles[i];
        items.push({
          header: el.innerText,
          description: el.nextElementSibling.innerHTML,
        });
        el.nextElementSibling.remove();
        el.remove();
      }
      const result = dom.querySelector('body').innerHTML;
      return (
        <Fragment>
          <Card.Group
            centered
            stackable
            itemsPerRow={3}
            items={items}
          />
          <div
            dangerouslySetInnerHTML={{ __html: result }}
          />
        </Fragment>
      );
    };

    return (
      <div>
        <PageHeader landing={landing} />
        <Container
          style={{
            paddingTop: '2em',
          }}
        >
          <Content
            title={externalData.title}
            content={externalData.content}
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
