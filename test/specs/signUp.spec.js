const SignUpPage = require("../pages/signUp.page");
const {
  userWithValidData,
  userWithEmptyConfirmation,
  userWithEmptyEmail,
} = require("../helpers/helper");

describe("Sign up test cases", () => {
  afterEach(async () => {
    await driver.closeApp();
    await driver.launchApp();
  });
  
  it("Should sign up with valid data", async () => {
    await SignUpPage.openLoginTab();
    await SignUpPage.openSignUpTab();
    await SignUpPage.fillSignUpForm(userWithValidData);
    await SignUpPage.submitSignUpForm();
    await expect(SignUpPage.successMessage).toBeDisplayed();
    await expect(SignUpPage.successMessage).toHaveTextContaining(
      "You successfully signed up!"
    );
  });

  it("Should not sign up without password confirmation", async () => {
    await SignUpPage.openLoginTab();
    await SignUpPage.openSignUpTab();
    await SignUpPage.fillSignUpForm(userWithEmptyConfirmation);
    await SignUpPage.submitSignUpForm();
    await expect(SignUpPage.confirmPasswordErrorMessage).toBeDisplayed();
    await expect(SignUpPage.confirmPasswordErrorMessage).toHaveTextContaining(
      "Please enter the same password"
    );
  });

  it("Should not sign up with empty email", async () => {
    await SignUpPage.openLoginTab();
    await SignUpPage.openSignUpTab();
    await SignUpPage.fillSignUpForm(userWithEmptyEmail);
    await SignUpPage.submitSignUpForm();
    await expect(SignUpPage.emailErrorMessage).toBeDisplayed();
    await expect(SignUpPage.emailErrorMessage).toHaveTextContaining(
      "Please enter a valid email address"
    );
  });
});
