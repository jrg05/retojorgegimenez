class CartPage {
  get checkoutBtn() { return "~checkout"; }

  async checkout() {
    await $(this.checkoutBtn).click();
  }
}

module.exports = new CartPage();
