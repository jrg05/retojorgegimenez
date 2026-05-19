class LoginPage {

  get usernameField() {
    return $('~username');
  }

  get passwordField() {
    return $('~password');
  }

  get loginButton() {
    return $('~loginBtn');
  }

  async login(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();
