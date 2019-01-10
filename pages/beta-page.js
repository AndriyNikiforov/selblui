'use strict';

const BasePage = require('./base-page');

class BetaPage extends BasePage {
  constructor() {
    super();
  }

  firstAction(address, element, text) {
    this.visitSite(address);
    this.setTextInput(element, text);
  }
}

module.exports = new BetaPage();
