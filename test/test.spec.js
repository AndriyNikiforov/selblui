'use strict';

/**
 * @const {Object} dotenv - for init env parameters
 */
const dotenv = require('dotenv');

/**
 * @const {Object} betaPage - for call action
 */
const betaPage = require('../pages/beta-page');

describe('beta', () => {
    before(() => {
      dotenv.load();
    });

    /**
     * @function test Simple example how to write code
     */
    it('test', async () => {
        await betaPage.firstAction(process.env.BASE_URL, '[name="q"]', 'golang');
    });
});
