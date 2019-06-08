import React, { Component, Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';

const graphqlEndpoint = 'http://10.42.0.98/graphql';

/*
 * helper function for http fetch requests
 */
const fetchPromise = (body, authToken) => {
  let headers = {}
  headers['Content-Type'] = 'application/json';
  if (authToken) headers['Authorization'] = `Bearer ${authToken}`
  return (
    fetch(graphqlEndpoint, {
      method: 'POST',
      credentials: 'same-origin',
      headers: headers,
      body: body
    })
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <HeaderMenu />
        <Container>
          <Route path="/:slug" component={ Page } />
          <Route strict exact path="/" component={ Page } />
        </Container>
        <FooterMenu />
      </Router>
    )
  }

}

class PageWrapper extends Component {

}

/* therefore must need a page wrapper to pass slug to the page */
class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      externalData: {
        title: "",
        date: "",
        slug: "",
        excerpt: "",
        content: ""
      }
    }
  }

  componentDidMount() {
    let slug = this._getSlugFromMatch(this.props);
    console.log('did mount: ', slug);
    this._loadAsyncData(slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params !== this.props.match.params) {
      this.setState({externalData: null});
      let slug = this._getSlugFromMatch(nextProps);
      console.log('will receive props: ', slug);
      this._loadAsyncData(slug);
    }
  }

  componentWillUnmount() {
    if (this._asyncRequest && 'cancel' in this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    // if (this.state.loading) return <div>loading ...</div>
    const data = this.state.externalData;
    if (this.state.externalData === null) return <div>Loading ...</div>
    return (
        <div>
          <header>
            { data.title } - { data.date } - { data.slug }
            <aside
              dangerouslySetInnerHTML={{ __html: data.excerpt }}
            />
          </header>
          <content
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
        </div>
    );
  }

  _getSlugFromMatch(props) {
    console.log(props.match)
    const urlParams = props.match.params;
    const slug = 'slug' in urlParams ? urlParams.slug : 'index';
    return slug
  }

  _loadAsyncData(slug) {
    console.log('load data', slug);
    let body = JSON.stringify({
      variables: {
        "first": 1,
        "where": {name: slug}
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
    })

    this._asyncRequest = fetchPromise(body)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ externalData: res.data.pages.edges[0].node });
        console.log(res.data.pages.edges[0].node);
        //this.setState({ title: title, date, content, excerpt, loading: false });
      })
      .catch((error) => console.error(error));
  }
}

class Menu extends Component {

  render() {
    return (
      <menu id="footer">
        <ul>
          { this.pages.map(page => (
            <li key={ page.slug }>
              <Link to={ page.slug }>
                { page.title }
              </Link>
            </li>
          ))}
          </ul>
      </menu>
    );
  }
}

class HeaderMenu extends Menu {

  constructor(props) {
    super(props);
    this.pages = [
      { title: 'Home', slug: '/index' },
      { title: 'Braided Ropes', slug: '/braided-rope' },
      { title: 'Products', slug: '/products' },
      { title: 'ProductInformation', slug: '/product-information' },
      { title: 'Technical Data', slug: '/technical-data' },
      { title: 'Distributors', slug: '/distributors' },
      { title: 'About Nautilus Braids', slug: '/about' }
    ]
  }

}
class FooterMenu extends Menu {

  constructor(props) {
    super(props);
    this.pages = [
      { title: 'Terms of Use', slug: '/terms-of-use' },
      { title: 'Privacy Policy', slug: '/privacy-policy' }
    ]
  }

}


export default App;
