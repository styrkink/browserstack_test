const { faker } = require("@faker-js/faker");

const userWithValidData = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

const userWithEmptyConfirmation = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  passwordConfirmation: "",
};

const userWithEmptyEmail = {
  email: "",
  password: faker.internet.password(),
};

module.exports = {
  userWithValidData,
  userWithEmptyConfirmation,
  userWithEmptyEmail,
};
