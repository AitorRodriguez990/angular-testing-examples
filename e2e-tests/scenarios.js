'use strict';

describe('My App', function() {
    it('should automatically redirect to /home when location hash/fragment is empty', function() {
        browser.get('index.html');
        browser.sleep(3000);
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    describe('Home', function() {
        it('should render home when user navigates to /home', function() {
            expect(element.all(by.css('[ng-view] h3')).first().getText()).toMatch(/Home/);
        });
    });

    describe('Operation', function() {
        it('should render operation when user navigates to /operation', function() {
            browser.get('index.html#!/operation');
            browser.sleep(3000);
            expect(element.all(by.css('[ng-view] h3')).first().getText()).toMatch(/Operation/);
        });

        it('should select rent operation', function() {

            expect(element(by.model('typeOperation')).getText()).toMatch(/rent/);
            browser.sleep(3000);
        });
    });

    describe('Contact', function() {
        it('should render contact when user navigates to /contact', function() {
            browser.get('index.html#!/contact');
            browser.sleep(3000);
            expect(element.all(by.css('[ng-view] h3')).first().getText()).toMatch(/Contact/);
        });

        it('should write on inputs and read a success message', function() {
            var name = element(by.model('name'));
            name.clear();
            name.sendKeys('Aitor');
            browser.sleep(1000);

            var surname = element(by.model('surname'));
            surname.clear();
            surname.sendKeys('Rodríguez');
            browser.sleep(1000);

            var company = element(by.model('company'));
            company.clear();
            company.sendKeys('Pisos.com');
            browser.sleep(1000);

            element(by.css('.btn-primary.send-contact')).click();
            expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch(/Contact form sended successfully. Wait the reply now./);

            browser.sleep(3000);
        });
    });
});
