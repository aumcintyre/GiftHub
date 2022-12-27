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

        // GET all exchanges
        exchanges: async () => {
            return await Exchange.find({}).populate('users');
        },
        exchange: async (parent, args) => {
            const exchange = await Exchange.findById(args.id);
            return exchange;
        },
        exchangeByUser: async(parent, args, context) => {
            const exchanges = await Exchange.find({
                "users.user._id": context.user._id
            });
            return exchanges
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
        addExchange: async (parent, args, context) => {
            console.log("context: ", context, "user prop:  ", context.user)
            try {
                const exchange = await Exchange.create({
                    roomName: args.roomName,
                    passphrase: args.passphrase,
                    creatorId: [context.user._id],
                    users: [context.user._id]
                });
                return exchange ;
                
            } catch (err) {
                console.error(err); 
            }
        },
        deleteExchange: async(parent, args) => {
            try {
                return Exchange.findByIdAndDelete(args.exchangeId)
            } catch (err) {
                console.error(err)
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
        removeFromExchange: async(parent, args) => {
            try {
                await Exchange.findOneAndUpdate({id: args.exhangeId}, {$pull: {users: {id: args.userId}} }, {new:true})
            } catch (err) {
                console.error(err)
            }
        }
    }
};


module.exports = resolvers;