import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/auth/login');
  }

  getEmailInput() {
    return element(by.css('input[placeholder="Email"]'));
  }

  getPasswordInput() {
    return element(by.css('input[placeholder="Password"]'));
  }

  getLoginButton() {
    return element(by.id('login-button'));
  }
}
