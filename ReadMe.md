# webdriver_browserstack_tests

## SUMMARY
This is the repo of test cases for the Android-NativeDemoApp-0.4.0 native applications, including cases for the register, swipe and drag functionality, automated with the webdriver framework and using the browserstack for modulating android devices (pixel 3 and samsung galaxy s22), allure as reporter and github actions for CI/CD. 

## REQUIREMENTS
- Node.js v20.14.10 or higher
- wdio/allure-reporter v9.0.4 or higher
- allure-commandline v2.30.0
- wdio/cli v8.1.0 or higher
- wdio/local-runner v8.1.0 or higher
- wdio/mocha-framework v8.1.0 or higher
- webdriverio v8.1.0 or higher
- dotenv v16.4.5 or higher
- Faker.js v8.4.1 or higher

## Steps to Install
### 1. Clone the repository
`git clone https://github.com/styrkink/browserstack_test.git
cd your-repo`
### 2. Install dependencies
`npm install`


## Steps to Launch
### 1. Run all tests in pixel 3 evnironment 
`npm run test:pixel`
### 2. Run all tests in samsung galaxy S22 evnironment 
`npm run test:samsung`
### 3. Run swipe test cases in pixel environment
`npm run test:pixel:swipe`
### 3. Run drag test cases in pixel environment
`npm run test:pixel:drag`
### 3. Run signup test cases in pixel environment
`npm run test:pixel:signup`
### 3. Run swipe test cases in samsung environment
`npm run test:samsung:swipe`
### 3. Run drag test cases in samsung environment
`npm run test:samsung:drag`
### 3. Run signup test cases in samsung environment
`npm run test:samsung:signup`


## Steps to view the report
### 1. Run your tests with any command
### 2. Generate report
`npm run report`