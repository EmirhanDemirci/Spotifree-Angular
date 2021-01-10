import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/user/login');
  }

  getForm() {
    return element(by.css('#loginForm'));
  }
  getUsernameTextbox() {
    return element(by.id('username'));
  }
  getPasswordTextbox() {
    return element(by.id('password'));
  }
}
