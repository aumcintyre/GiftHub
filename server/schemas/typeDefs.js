const { gql } = require('apollo-server-express');

const typeDefs = gql
    // type Wish {
    //     _id: ID
    //     itemName: String!
    //     price: Num
    // }

    // type Exchange {
    //     _id: ID
    //     roomName: String!
    //     passphrase: String!
    //     users: [User]
    // }

    `
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        bookCount: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
