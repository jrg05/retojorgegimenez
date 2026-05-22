class ProductsPage {

  get firstProduct() {
    return $('~product_1');
  }

  get addToCartButton() {
    return $('~addToCart');
  }

  async selectFirstProduct() {
    await this.firstProduct.click();
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = new ProductsPage();
