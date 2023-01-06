const { Schema, model } = require('mongoose');

const exchangeSchema = new Schema(
    {

        creatorID: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        roomName: {
            type: String,
            required: true,
        },
        passphrase: {
            type: String,
            required: true,
        },
        users: [
            {
                type: String,
                required: false,
                // ref: 'User'
            }
        ],

    }
)

const Exchange = model('Exchange', exchangeSchema);

module.exports = Exchange;