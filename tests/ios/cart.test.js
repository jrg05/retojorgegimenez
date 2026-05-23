const LoginPage = require("../../pages/LoginPage");
const ProductsPage = require("../../pages/ProductsPage");
const CartPage = require("../../pages/CartPage");

describe("iOS Checkout Flow", () => {

  it("should complete checkout flow", async () => {

    await LoginPage.login(
      "standard_user",
      "secret_sauce"
    );

    await ProductsPage.selectFirstProduct();

    await ProductsPage.addProductToCart();

    await CartPage.proceedToCheckout();

  });

});
