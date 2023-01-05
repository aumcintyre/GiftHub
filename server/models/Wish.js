const { Schema, model } = require('mongoose');

const wishSchema = new Schema(
    {
        itemName: {
            type: String,
            required: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    }
)
module.exports = wishSchema;