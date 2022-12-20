const { User, Wish, Exchange } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (parents, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: '',
                    populate: 'exchanges'
                });

                return user;
            } else {
                // ?????
            }
        },
        wishes: async () => {
            return await Wish.find();
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

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
    }
}


module.exports = resolvers;