
const { faker } = require("@faker-js/faker");

function fakeUser(overrides = {}) {
    //password remains stable
    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email({ provider: "example.com" }).toLowerCase(),
        password: "Password33$",
        ...overrides,
    }

    return user;

}

module.exports = { fakeUser };