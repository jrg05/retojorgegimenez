const LoginPage = require("../../pages/LoginPage");
const ProductsPage = require("../../pages/ProductsPage");
const CartPage = require("../../pages/CartPage");

describe("iOS Checkout Flow", () => {
  it("should complete purchase on iOS", async () => {
    await LoginPage.login("standard_user", "secret_sauce");

    await ProductsPage.selectProduct();
    await ProductsPage.addToCartItem();

    await CartPage.checkout();
  });
});
