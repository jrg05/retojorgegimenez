const LoginPage = require('../pages/LoginPage');

describe('Login Flow', () => {

  it('should login successfully', async () => {

    await LoginPage.login(
      'bob@example.com',
      '10203040'
    );

  });

});