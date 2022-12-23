const { Schema, model } = require('mongoose');

const exchangeSchema = new Schema(
    {   
        
        creatorId:{
            type: String,
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
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],

    }
)

const Exchange = model('Exchange', exchangeSchema);

module.exports = Exchange;