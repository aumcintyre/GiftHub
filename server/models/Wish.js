const { Schema, model } = require('mongoose');

const wishSchema = new Schema(
    {
        itemName: {
            type: String,
            required: true
        },
        // price: {
        //     type: Float,
        //     //NOT required
        // }
    }
)
module.exports = wishSchema;