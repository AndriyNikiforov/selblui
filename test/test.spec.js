'use strict';

/**
 * @var {Object} for generate fake data.
 */
const faker = require('faker');

/**
 * @var {Object} for create session
 */
const browser = require('selenium-webdriver/chrome');

/**
 * Objects for work with elements
 */
const { By, until } = require('selenium-webdriver');

/**
 * @var {Object} for create browser and make actions
 */
const driver = browser.Driver.createSession();

describe('beta', () => {
    before(() => {
      // Some code
    });

    /**
     * @function test Simple example how to write code
     */
    it('test', async () => {
        await driver.get('https://google.com')
          .then(() => {
            driver.wait(until
              .elementLocated(By.name('q'),
               1000));

            driver.findElement(By.name('q'))
              .sendKeys('golang');
          });
    });
});
