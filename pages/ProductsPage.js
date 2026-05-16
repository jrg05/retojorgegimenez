class ProductsPage {
  get firstProduct() { return "~product_1"; }
  get addToCart() { return "~addToCart"; }

  async selectProduct() {
    await $(this.firstProduct).click();
  }

  async addToCartItem() {
    await $(this.addToCart).click();
  }
}

module.exports = new ProductsPage();
