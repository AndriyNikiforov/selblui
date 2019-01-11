'use strict';

const dotenv = require('dotenv');
const BetaPage = require('../pages/beta-page');
const driver = require('selenium-webdriver/chrome');

const chrome = driver.Driver.createSession();
const page = new BetaPage(chrome);

describe('beta', () => {
    before(() => {
      dotenv.load();
    });

    it('test', async () => {
        await page.firstAction(process.env.BASE_URL, '[name="q"]', 'golang');
    });
});
