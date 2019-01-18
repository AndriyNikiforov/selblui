'use strict';

const fs = require('fs');
const dotenv = require('dotenv');

const driver = require('selenium-webdriver/chrome');

const chrome = driver.Driver.createSession();
const page = new BetaPage(chrome);

describe('beta', () => {
    before(() => {
      dotenv.load();
    });

    it('test', () => {
    });

});


const saveImage = (name, data) =>  {
  const base64Data = data.replace(/^data:image\/png;base64,/,"");

  fs.writeFile(`./screenshots/${name}`, base64Data, 'base64', (err) => {
       if(err) console.log(err);
  });
};
