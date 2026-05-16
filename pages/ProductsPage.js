class ProductsPage {
  constructor(driver) {
    this.driver = driver;
    this.firstProduct = "~product_1";
    this.addToCartBtn = "~addToCart";
  }

  async selectFirstProduct() {
    await this.driver.$(this.firstProduct).click();
  }

  async addToCart() {
    await this.driver.$(this.addToCartBtn).click();
  }
}

module.exports = ProductsPage;
