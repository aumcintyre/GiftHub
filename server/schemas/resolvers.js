const { User, Wish, Exchange } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('User not logged in!');
        },
        users: async () => {
            return await User.find({});
        },
        user: async (parent, args) => {
            const user = await User.findById(args.id);
            return user;
        },

        // GET all exchanges
        exchanges: async (parent, args, context) => {
            console.log("seeking exchanges////")
            return await Exchange.find({}).populate('users');
        },
        exchange: async (parent, args) => {
            const exchange = await Exchange.findById(args.id);
            return exchange;
        },
        exchangeByUser: async(parent, args, context) => {
            console.log("context.user is right here:", context.user)
            if (context.user) {
                console.log("seeking exchanges////")
                const exchanges = await Exchange.find({
                    "users": context.user._id
                });
                return exchanges
            }
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
            console.log("user prop:  ", context.user)
            try {
                const exchange = await Exchange.create({
                    roomName: args.roomName,
                    passphrase: args.passphrase,
                    creatorID: context.user._id,
                    users: [context.user._id]
                });
                console.log("here's your precious exchange:", exchange)
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
        joinExchange: async (parent, args, context) => {
            try {
                const exchange = await Exchange.findOneAndUpdate({id: args.exchangeId, passphrase: args.passphrase}, {$push: {users: user}}, {new:true})
                return exchange;
            } catch(err) {
                console.error(err);
                alert("Invalid Room or Passphrase!");
            }
        },
        removeFromExchange: async(parent, args) => {
            try {
                await Exchange.findOneAndUpdate({id: args.exhangeId, passphrase: args.passphrase}, {$pull: {users: {id: args.userId}} }, {new:true})
            } catch (err) {
                console.error(err)
            }
        }
    }
};


module.exports = resolvers;