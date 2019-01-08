'use strict';

const faker = require('faker');

const browser = require('selenium-webdriver/chrome');
const { By, until } = require('selenium-webdriver');

const driver = browser.Driver.createSession();

describe('beta', () => {
    before(() => {
      // Some code
    });

    it('test', async () => {
        await driver.get('https://google.com')
          .then(() => {
            driver.wait(until.elementLocated(By.name('q'), 1000));

            driver.findElement(By.name('q')).sendKeys('golang');
          });
    });
});
