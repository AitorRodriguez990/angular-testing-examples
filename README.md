# angular-testing-examples

Angular Testing Examples. This project is using [angular-seed](https://github.com/angular/angular-seed).


## Getting Started

### Prerequisites

* Install GIT: [http://git-scm.com/](http://git-scm.com/).
* Install NodeJS: [http://nodejs.org/](http://nodejs.org/).

### Install Dependencies

'npm' is preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

### Run the Application

Start the server:

```
npm start
```

Now application is running at `http://localhost:8000/index.html`.


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```


## Testing

In this project you can see unit tests and end-to-end tests.

### Running Unit Tests

These are written in [Jasmine][jasmine], which we run with the [Karma Test Runner][karma].

* The configuration is found at `karma.conf.js`
* The unit tests are found next to the code they are testing and are named as `..._test.js`.

Run the unit tests:

```
npm test
```

If you want to check that a particular version of the code is operating as expected;

```
npm run test-single-run
```

### End to end testing

These are again written in [Jasmine][jasmine]. These tests are run with the [Protractor][protractor] End-to-End test runner.

* The configuration is found at `e2e-tests/protractor-conf.js`
* The end-to-end tests are found in `e2e-tests/scenarios.js`

Our web server needs to be serving up the application:

```
npm start
```

Install WebDriver. This script will download and install the latest version of the stand-alone WebDriver tool:

```
npm run update-webdriver
```

Once you have ensured that the web server is up and running and WebDriver is updated, you can run the end-to-end tests:

```
npm run protractor
```

**Note:**
Under the hood, Protractor uses the [Selenium Stadalone Server][selenium], which in turn requires the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running `java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].

## Copyright

Copyright (c) 2016 Aitor Rodríguez - [Front End Factory](http://www.frontendfactory.es). Directive licensed under the MIT License.
