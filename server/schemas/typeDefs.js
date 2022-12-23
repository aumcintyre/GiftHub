const { gql } = require('apollo-server-express');

const typeDefs = gql

`
    type Wish {
        _id: ID
        itemName: String!
        price: Int
    }

    type Exchange {
        _id: ID
        roomName: String
        passphrase: String
        users: [User]
    }
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user(_id: ID!): User
        users: [User]
        exchanges: [Exchange]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        deleteUser(userId: ID!): User
        loginUser(username: String!, password: String!): Auth
        addExchange(roomName: String!, passphrase: String!): Exchange
        addUserToExchange(exchangeId: ID!, userId: ID!): Exchange
        clearExchangeTEST(exchangeId: ID!): Exchange
    }
    
    
    `;

module.exports = typeDefs;
