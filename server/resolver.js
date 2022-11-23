const faker = require('faker');

const range = (size, callback) => {
    return Array.from({ length: size }, callback)
}

const resolvers = {
    Query: {
        users: (_query, { cursor, first }) => {
            faker.seed(123)
            const users = range(4000, () => ({
                id: faker.random.alphaNumeric(10),
                name: faker.name.findName(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                jobArea: faker.name.jobArea(),
                jobTitle: faker.name.jobTitle(),
                jobDesc: faker.lorem.lines(4),
                companyName: faker.company.companyName(),
                phNo: faker.phone.phoneNumber(),
                empId: faker.random.alphaNumeric(),
                dateJoined: faker.date.past(),
                title: faker.name.prefix(),
                avatar: faker.image.dataUri()
            }));

            const cursorIndex = !cursor ? 0 : users.findIndex(user => user.id === cursor) + 1
            const sliceOfUsers = users.slice(cursorIndex, cursorIndex + first)

            return {
                edges: sliceOfUsers.map(user => ({ cursor: user.id, node: { ...user } })),
                pageInfo: {
                    endCursor: sliceOfUsers[sliceOfUsers.length - 1].id,
                    hasNextPage: cursorIndex + first < users.length,
                },
            }
        },
    },
}

module.exports = { resolvers };