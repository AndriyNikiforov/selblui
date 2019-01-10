'use strict';

const { By, until } = require('selenium-webdriver');
const driver = require('selenium-webdriver/chrome');



/**
 * @class {{BasePage}}
 */
class BasePage {
  constructor() {
    this.By = By;
    this.until = until;
    this.driver = driver.Driver.createSession();
  }

  /**
   * @method SiteTitle
   */
  getSiteTitle() {
    return this.driver.getTitle();
  }

  /**
   * @method ElementById
   * @param {String} id
   */
  getElementById(id) {
    return this.driver
      .findElement(this.By.id(id));
  }

  /**
   * @method ElementByClass
   * @param {String} cssClass
   */
  getElementByClass(cssClass) {
    return this.driver
      .findElement(this.By.className(cssClass));
  }

  /**
   * @method ElementByXPath
   * @param {String} xPath
   */
  getElementByXPath(xPath) {
    return this.driver
      .findElement(this.By.xpath(xPath));
  }

  /**
   * @method getElementByName
   * @param {String} name
   */
  getElementByName(name) {
    return this.driver
      .findElement(this.By.name(name));
  }

  /**
   * @method setTextInput
   * @param {String} element
   * @param {String} text
   */
  setTextInput(element,text) {
    this.driver
      .findElement(this.By.css(element))
      .sendKeys(text);
  }

  /**
   * @method setDataTextArea
   * @param {Locator: locator} element
   * @param {String} text
   */
  setDataTextArea(element, text) {
    element.click();
    element.clear();
    element.sendKeys(text);
  }

  /**
   * @method waitElement
   * @param {Locator: locator} element
   * @param {Number} time
   */
  waitElement(element, time) {
    this.driver
      .wait(this.until
        .elementLocated(element),
         time);
  }

  /**
   * @method address
   * @param {String} address
   */
  visitSite(address) {
    this.driver.get(address);
  }
}

module.exports = BasePage;
