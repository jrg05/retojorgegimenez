const LoginPage = require("../pages/LoginPage");

describe("Login Tests", () => {
  let loginPage;

  beforeAll(() => {
    loginPage = new LoginPage(global.driver);
  });

  test("User can login successfully", async () => {
    await loginPage.login("testuser", "1234");

    const title = await global.driver.getTitle();
    expect(title).toBeDefined();
  });
});
