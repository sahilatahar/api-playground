const { faker } = require('@faker-js/faker');

const getUser = () => {
    return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        gender: faker.person.gender(),
        bio: faker.person.bio(),
        phone: faker.phone.number(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.location.country(),
            zipcode: faker.location.zipCode(),
        }
    };
}

module.exports = { getUser };