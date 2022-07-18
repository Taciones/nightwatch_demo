# Nightwatch.js Demo Tests


[![npm](https://img.shields.io/npm/v/nightwatch.svg)](https://www.npmjs.com/package/nightwatch)
[![Build Status](https://travis-ci.org/nightwatchjs/nightwatch.svg?branch=master)](https://travis-ci.org/nightwatchjs/nightwatch) 
[![Coverage Status](https://coveralls.io/repos/nightwatchjs/nightwatch/badge.svg?branch=master&service=github)](https://coveralls.io/github/nightwatchjs/nightwatch?branch=master)
***
Nightwatch.js demo tests which run against the [saucedemo shop](https://www.saucedemo.com) making one E2E purchase, using Firefox.

## 1. Install Firefox
Visit the Mozilla Firefox website: https://www.mozilla.org/en-US/firefox/new/

## 2. git clone
This will clone the project, install Nightwatch and also the GeckoDriver which is required to interact with the Firefox browser.
No Selenium Server is required.

```sh
$ git clone https://github.com/taciones/nightwatch_demo.git
$ cd nightwatch_demo
$ npm install
```

## 3. Run tests
To run the tests using Firefox simply run the command:

```sh
$ npx nightwatch tests/specs/with-page-objects/saucedemo_E2E.js
```

### Geckodriver documentation
Geckodriver is a proxy for using [W3C WebDriver](https://www.w3.org/TR/webdriver1/)-compatible clients to interact with Gecko-based browsers, such as Firefox.

Documentation is available at:
https://firefox-source-docs.mozilla.org/testing/geckodriver/index.html