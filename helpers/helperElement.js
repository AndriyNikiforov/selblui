'use strict';

export default class helperElement {
   constructor(driver, by) {
     this.driver = driver;
     this.by = by;
   }

  reactSelectClick(selectClass, optionClass) {
      this.driver
        .findElement(this.by.css(selectClass))
        .click();

      this.driver.wait();

      this.driver
        .findElement(this.by.css(optionClass))
        .click();
  }
}
