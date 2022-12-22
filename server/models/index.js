// const Profile = require('./Profile');
const User = require('./User');
const Wish = require('./Wish');
const Exchange = require('./Exchange');

module.exports = { User, Wish, Exchange };

// Exchanges have users
// Users have wishlists
// Wishlists have items
// 