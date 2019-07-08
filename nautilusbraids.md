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
* install Contact Form: [contact-form-7]
* install message storage: [flamingo]
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

## 09 June 2019 (4hrs)

* get code in order - install eslint and tidy
* start working up a landing page

## 10 June 2019 (2hrs)

* work up responsive container (mobile version)

## 11 June 2019 (1hrs)

* work up menu and continue with container and landing page

## 16 June 2019 (5hrs)

* more work on menu, landing page, and responsive layout
* sorted a scalable vector graphic as icon

## 20 June 2019 (2hrs)

* sort out theming, add colour

## 21 June 2019 (2hrs)

* more responsive layout for mobile version
* consider search functionality

## 23 June 2019 (3hrs)

* some working out of styles and classes
* continue with search input and results

## 25 June 2019 (2hrs)

* complete search input and results

## 28 June 2019 (4hrs)

* work up sign in and contact forms

## 29 June 2019 (4hrs)

* sign in and contact forms

## ... not paying attention ...

## 06 July 2019 (2hrs)

* big change in direction
* created new git repository at [Nautilus]

## 07 July 2019 (3hrs)

* getting up to speed with themes
* using semantic ui

## 08 July 2019 (3hrs)

* responsive menu
* search form
* layout

# TODO

* nice error page if http request error or empty
* get landing page to work nicely
* search
* distributor login
* contact form
* footer menu

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
[contact-form-7]: https://contactform7.com/
[flamingo]: https://contactform7.com/save-submitted-messages-with-flamingo/
