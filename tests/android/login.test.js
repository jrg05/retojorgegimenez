const LoginPage = require("../../pages/LoginPage");

describe("Android Login Flow", () => {

  it("should login successfully on Android", async () => {

    await LoginPage.login(
      "standard_user",
      "secret_sauce"
    );

  });

});
