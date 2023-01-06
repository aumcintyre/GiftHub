const { gql } = require('apollo-server-express');

const typeDefs = gql

    `
    type Wish {
        _id: ID
        item: String!
    }

    type Exchange {
        _id: ID
        creatorID: ID
        roomName: String
        passphrase: String
        users: [String]
    }
    type User {
        _id: ID
        username: String
        email: String
        secretSantaId: ID
        exchange: [Exchange]
        wishes: [String]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        user(username: String!): User
        users: [User]
        exchanges: [Exchange]
        exchange: Exchange
        exchangeByUser: [Exchange]
    }

    type Mutation {
        addWishItem(item: String!): User
        addUser(username: String!, email: String!, password: String!): Auth
        deleteUser(userId: ID!): User
        loginUser(username: String!, password: String!): Auth
        addExchange(roomName: String!, passphrase: String!): Exchange
        deleteExchange(exchangeId: ID!): Exchange
        joinExchange(roomName: String!, passphrase: String!): Exchange
        removeFromExchange(exchangeId: ID!, userId: ID!): Exchange
    }
    
    
    `;

module.exports = typeDefs;
