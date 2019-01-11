'use strict';

/**
 * @const {Object} fs
 */
const fs = require('fs');

/**
 * @const {Object} By
 * @const {Object} until
 */
const { By, until } = require('selenium-webdriver');

// /**
//  * @const {Object} driver
//  */
// const driver = require('selenium-webdriver/firefox');

/**
 * @method SaveImage
 * @param {String} name
 * @param {Data} data
 */
const saveImage = (name, data) =>  {
   fs.writeFile(`./screenshot/${name}`,
    data.replace(/^data:image\/png;base64,/,''), 'base64',
    (err) => console.error(err));
};

/**
 * @class BasePage
 */
class BasePage {
  constructor(driver) {
    this.By = By;
    this.until = until;
    this.driver = driver;
  }

  /**
   * @method getSiteTitle
   */
  getSiteTitle() {
    return this.driver.getTitle();
  }

  /**
   * @method getElementById
   * @param {String} id
   */
  getElementById(id) {
    return this.driver
      .findElement(this.By.id(id));
  }

  /**
   * @method getElementByClass
   * @param {String} cssClass
   */
  getElementByClass(cssClass) {
    return this.driver
      .findElement(this.By.className(cssClass));
  }

  /**
   * @method getElementByXPath
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
   * @param {Locator} element
   * @param {String} text
   */
  setDataTextArea(element, text) {
    element.click();
    element.clear();
    element.sendKeys(text);
  }

  /**
   * @method waitElement
   * @param {Locator} element
   * @param {Number} time
   */
  waitElement(element, time) {
    this.driver
      .wait(this.until
        .elementLocated(element),
         time);
  }

  /**
   * @method selectElement
   * @param {Object} select
   * @param {Object} option
   * @param {Number} waitTime
   */
  selectElement(select, option, waitTime) {
    this.driver.findElement(select)
      .click();

    this.waitElement(option, waitTime);

    this.driver
      .findElement(option).click();

    this.driver
      .findElement(this.By.tagName('body')).click();
  }

  /**
   * @method visitSite
   * @param {String} address
   */
  visitSite(address) {
    this.driver.get(address);
  }

  /**
   * @method screenShot
   * @param {String} name
   */
  screenShot(name) {
    this.driver
      .takeScreenshot()
      .then((data) => saveImage(name, data));
  }

  /**
   * @method exit
   * @description Close browser
   */
  exit() {
    this.driver.quit();
  }
}

module.exports = BasePage;
