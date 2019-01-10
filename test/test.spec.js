'use strict';

const dotenv = require('dotenv');
const betaPage = require('../pages/beta-page');

describe('beta', () => {
    before(() => {
      dotenv.load();
    });

    it('test', async () => {
        await betaPage.firstAction(process.env.BASE_URL, '[name="q"]', 'golang');
    });
});
