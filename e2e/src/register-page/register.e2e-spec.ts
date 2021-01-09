import { RegisterPage } from './register.po';

describe('Register e2e testing', () => {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
    page.navigateTo();
  });

  it('Register form should be valid', () => {
    page.getForm();
    page.getUsernameTextbox().sendKeys('emirhan123');
    page
      .getPasswordTextbox()
      .sendKeys(
        'nicePasswordasjhgdjaskdgasjkhdgashjdghsjkadgslajkhdgsaljgdaksldglakjdgkajsgdgsalkghjdgls'
      );
    page
      .getConfirmPasswordTextbox()
      .sendKeys(
        'nicePasswordasjhgdjaskdgasjkhdgashjdghsjkadgslajkhdgsaljgdaksldglakjdgkajsgdgsalkghjdgls'
      );

    const form = page.getForm().getAttribute('class');

    expect(form).toContain('ng-valid');
  });
});
