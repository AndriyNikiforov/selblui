'use strict';

/**
 * @const {Object} BasePage - class object
 */
const BasePage = require('./base-page');

/**
 * @class BetaPage
 */
class BetaPage extends BasePage {
  constructor() {
    super();
  }

  /**
   * @description Open site and put the data
   * @method firstAction
   * @param {String} address
   * @param {String} element
   * @param {String} text
   */
  firstAction(address, element, text) {
    this.visitSite(address);
    this.setTextInput(element, text);
    this.screenShot('gg.png');
  }
}

module.exports = new BetaPage();
