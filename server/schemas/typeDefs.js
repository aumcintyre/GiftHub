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
        creatorID: ID
        roomName: String
        passphrase: String
        users: [User]
    }
    type User {
        _id: ID
        username: String
        email: String
        secretSantaId: ID
        exchange: [Exchange]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user(_id: ID!): User
        users: [User]
        exchanges: [Exchange]
        exchange: Exchange
        exchangeByUser: [Exchange]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        deleteUser(userId: ID!): User
        loginUser(username: String!, password: String!): Auth
        addExchange(roomName: String!, passphrase: String!): Exchange
        deleteExchange(exchangeId: ID!): Exchange
        addUserToExchange(exchangeId: ID!, userId: ID!): Exchange
        removeFromExchange(exchangeId: ID!, userId: ID!): Exchange
    }
    
    
    `;

module.exports = typeDefs;
