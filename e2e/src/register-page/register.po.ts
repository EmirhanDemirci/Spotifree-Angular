import { browser, by, element } from 'protractor';

export class RegisterPage {
  navigateTo() {
    return browser.get('/user/registration');
  }

  getForm() {
    return element(by.css('#registerForm'));
  }
  getUsernameTextbox() {
    return element(by.id('username'));
  }
  getPasswordTextbox() {
    return element(by.id('password'));
  }
  getConfirmPasswordTextbox() {
    return element(by.id('confirmPassword'));
  }
}
