import { LoginPage } from './login.po';

describe('protractor-tutorial - Login page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('when user trying to login with wrong credentials he should stay on “login” page', () => {
    page.navigateTo();

    page.getEmailInput().click();
    page.getEmailInput().clear().sendKeys('victorandresmtz@gmail.com');

    page.getPasswordInput().click();
    page.getPasswordInput().sendKeys('021195vic');

    page.getLoginButton().click();

    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4201/dashboard/people');
    browser.sleep(2000);
  });
});
