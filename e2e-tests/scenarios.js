'use strict';

describe('My App', function() {
  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('Home', function() {
    beforeEach(function() {
      browser.get('index.html#!/home');
    });

    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Hello World!/);
    });
  });

  describe('Contact', function() {
    beforeEach(function() {
      browser.get('index.html#!/contact');
    });

    it('should render contact when user navigates to /contact', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/This is the partial for Contact/);
    });
  });
});
