const LoginPage = require("../../pages/LoginPage");

describe("iOS Login Flow", () => {
  it("should login successfully on iOS", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
  });
});
