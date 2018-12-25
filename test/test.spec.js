'use strict';

const faker = require('faker');
const wd = require('selenium-webdriver');
const until = wd.until;

const driver = new wd.Builder()
  .usingServer('http://localhost:4444/wd/hub')
  .withCapabilities({
    'browserName': 'chrome',
    'version': '',
    'platform': 'ANY',
    'javascriptEnabled': true
   })
  .build();

describe('beta', () => {
    before(() => {
      // Fake data init
    });

    it('test', async () => {
        await driver.get('https://google.com')
          .then(() => {
            // TEST CODE
          });
    });

    after(() => {
       driver.quit();
    });
});
