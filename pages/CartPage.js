class CartPage {
  constructor(driver) {
    this.driver = driver;
    this.checkoutBtn = "~checkout";
  }

  async proceedToCheckout() {
    await this.driver.$(this.checkoutBtn).click();
  }
}

module.exports = CartPage;
