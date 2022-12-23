const { User, Wish, Exchange } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async (parent, args) => {
            const user = await User.findById(args.id);
            return user;
        },
        exchanges: async () => {
            return await Exchange.find({});
        }
    },
    Mutation: {
        loginUser: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Invalid user name')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Invalid password')
            }



            const token = signToken(user);
            return { token, user };

        },
        addUser: async (parent, args) => {
            try {

                const user = await User.create(args);
                const token = signToken(user);

                return { token, user };
            }
            catch (err) {
                console.error(err);
            }
        },
        deleteUser: async (parent, args) => {
            try {
                return User.findByIdAndDelete(args.userId)
            } catch (err) {
                console.error(err)
            }
        },
        addExchange: async (parent, args) => {
            try {
                const exchange = await Exchange.create(args);
                return { exchange };
                
            } catch (err) {
                console.error(err); 
            }
        },
        addUserToExchange: async (parent, args) => {
            try {
                const user = await User.findById(args.userId);
                const exchange = await Exchange.findOneAndUpdate({id: args.exchangeId}, {$push: {users: user}}, {new:true})
                return exchange;
            } catch(err) {
                console.error(err)
            }
            // const exchange = await Exchange.findById(args.exchangeId);
            // const user = await User.findById(args.userId);

            // exchange.update({}, {$set: {users: [...users, user]}})
            // return exchange;
        },
        clearExchangeTEST: async(parent, args) => {
            try {
                await Exchange.findOneAndUpdate({id: args.exhangeId}, {users: []}, {new:true})
            } catch (err) {
                console.error(err)
            }
        }
    }
};


module.exports = resolvers;