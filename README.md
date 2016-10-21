# angular-testing-examples

Angular Testing Examples to [Pisos.com](http://www.pisos.com). This project is using [angular-seed](https://github.com/angular/angular-seed).


## Getting Started

### Prerequisites

* Install GIT: [http://git-scm.com/](http://git-scm.com/)
* Install NodeJS: [http://nodejs.org/](http://nodejs.org/)

### Install Dependencies

`npm` is preconfigured to automatically run `bower`, so we can simply do:

```
npm install
```

### Run the Application

Start the server:

```
npm start
```

Now application is running at `http://localhost:8000/index.html`


## Testing

In this project you can see unit tests and end-to-end tests.

### Running Unit Tests

These are written in [Jasmine][jasmine], which we run with the [Karma Test Runner][karma].

* The configuration is found at `karma.conf.js`
* The unit tests are found next to the code they are testing and are named as `..._test.js`

Run the unit tests:

```
npm test
```

If you want to check that a particular version of the code is operating as expected:

```
npm run test-single-run
```

### End to end testing

These are again written in [Jasmine][jasmine]. These tests are run with the [Protractor][protractor] End-to-End test runner. [Here][jasmine-docs] you can see documentation about Jasmine.

* The configuration is found at `e2e-tests/protractor-conf.js`
* The end-to-end tests are found in `e2e-tests/scenarios.js`

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

Copyright (c) 2016 Aitor Rodríguez - [Front End Factory](http://www.frontendfactory.es). Licensed under the MIT License.

[jasmine]: https://jasmine.github.io
[jasmine-docs]: https://github.com/angular/protractor/blob/master/docs/toc.md
[karma]: https://karma-runner.github.io
[protractor]: https://github.com/angular/protractor
[selenium]: http://docs.seleniumhq.org/
[jdk]: https://en.wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads/index.html
