import { LoginPage } from './login.po';

describe('Login e2e testing', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo();
  });

  it('Login form should be valid', () => {
    page.getForm();
    page.getUsernameTextbox().sendKeys('emirhan123');
    page.getPasswordTextbox().sendKeys('ThisIsAnAmazingPassword');

    const form = page.getForm().getAttribute('class');

    expect(form).toContain('ng-valid');
  });
});
