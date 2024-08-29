class SignUpPage {
  get loginTab() {
    return $('//android.widget.TextView[@text="󰍂"]');
  }
  get signUpTab() {
    return $('//android.widget.TextView[@text="Sign up"]');
  }
  get emailInput() {
    return $('//android.widget.EditText[@content-desc="input-email"]');
  }
  get passwordInput() {
    return $('//android.widget.EditText[@content-desc="input-password"]');
  }
  get passwordConfirmInput() {
    return $(
      '//android.widget.EditText[@content-desc="input-repeat-password"]'
    );
  }
  get signUpButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup'
    );
  }
  get successMessage() {
    return $(
      '//android.widget.TextView[contains(@text, "successfully signed up")]'
    );
  }
  get emailErrorMessage() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]'
    );
  }
  get confirmPasswordErrorMessage() {
    return $(
      '//android.widget.TextView[@text="Please enter the same password"]'
    );
  }
  get successMessageConfirmButton() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }

  async openLoginTab() {
    await this.loginTab.click();
  }
  async openSignUpTab() {
    await this.signUpTab.click();
  }

  async fillSignUpForm(user) {
    await this.emailInput.setValue(user.email);
    await this.passwordInput.setValue(user.password);
    if (user.passwordConfirmation !== undefined) {
      await this.passwordConfirmInput.setValue(user.passwordConfirmation);
    } else {
      await this.passwordConfirmInput.setValue(user.password);
    }
  }

  async submitSignUpForm() {
    await this.signUpButton.click();
  }
  async closeSuccessMessage() {
    await this.successMessageConfirmButton.click();
  }
}

module.exports = new SignUpPage();
