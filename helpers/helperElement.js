export default class helperElement {
   constructor(driver, wd) {
     this.driver = driver;
     this.wd = wd;
   }

  reactSelectClick(selectClass, optionClass) {
      this.driver
        .findElement(this.wd.By.css(selectClass))
        .click();

      this.driver.wait();

      this.driver
        .findElement(this.wd.By.css(optionClass))
        .click();
  }

  fieldSenData(id, value) {
    this.driver
      .findElement(this.wd.By.id(id))
      .sendKeys(value);
  }
}
