class CartPage {

  get checkoutButton() {
    return $('~checkout');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = new CartPage();
