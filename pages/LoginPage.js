class LoginPage {
  constructor(driver) {
    this.driver = driver;

    this.usernameField = "~username";
    this.passwordField = "~password";
    this.loginButton = "~loginBtn";
  }

  async enterUsername(username) {
    await this.driver.$(this.usernameField).setValue(username);
  }

  async enterPassword(password) {
    await this.driver.$(this.passwordField).setValue(password);
  }

  async clickLogin() {
    await this.driver.$(this.loginButton).click();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

module.exports = LoginPage;
