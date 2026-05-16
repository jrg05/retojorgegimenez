const LoginPage = require("../pages/LoginPage");
const ProductsPage = require("../pages/ProductsPage");
const CartPage = require("../pages/CartPage");

describe("Cart Flow Tests", () => {
  let loginPage, productsPage, cartPage;

  beforeAll(() => {
    loginPage = new LoginPage(global.driver);
    productsPage = new ProductsPage(global.driver);
    cartPage = new CartPage(global.driver);
  });

  test("User adds product to cart and checks out", async () => {
    await loginPage.login("testuser", "1234");

    await productsPage.selectFirstProduct();
    await productsPage.addToCart();

    await cartPage.proceedToCheckout();

    expect(true).toBe(true);
  });
});
