# Nautilus Braids website update to Worpress

## Task

Upgrade [Nautilus Braids] website to [Wordpress].

## 01 June 2019 (6 hrs)

### Set up development server

* install [Nginx] web server
* install [PHP]
* install [MariaDB]
* install [Wordpress]
* install [Graphql] plugin: [wp-graphql]
* install [Graphiql] browser: [wp-graphiql]
* set up [permalinks] using [nginx location]
* install and configure [jwt authentication] for data import

## 02 June 2019 (4hrs)

* start working on script to [scrape] the current webiste for text and import
  into [Wordpress] database.

## 07 June 2019 (10hrs)

* sort out graphql connections, authorization, and queries
* successfully imported current text into [Wordpress] database
* build barebones theme for [Wordpress]
* begin building front-end application with [React]

## 08 June 2019 (6hrs)

* initial routing built using [React Router]
* theming with [React Semantic UI] and [Tachyons]
* prototype simple header/content/footer layout
* tidy up imported text

[Nautilus Braids]: https://nautilusbraids.co.nz
[Wordpress]: https://wordpress.org
[Nginx]: https://nginx.org
[PHP]: https://php.net
[MariaDB]: https://mariadb.org
[MySQL]: https://mysql.com
[Graphql]: https://graphql.org
[wp-graphql]: https://github.com/wp-graphql/wp-graphql
[wp-graphiql]: https://github.com/wp-graphql/wp-graphiql
[permalinks]: https://wordpress.org/support/aricale/using-permalinks
[nginx location]: https://nginxlibrary.com/wordpress-permalinks
[scrape]: https://en.wikipedia.org/wiki/Web_scraping
[jwt authenticaition]: https://github.com/wp-graphql/wp-graphql-jwt-authentication
[React]: https://reactjs.org
[React Router]: https://reacttraining.com/react-router/
[React Semantic UI]: https://react.semantic-ui.com
[Tachyons]: https://tachyons.io/
