const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Product name must be provied']
    },
    price:{
        type:Number,
        required:[true, 'Product price must be provied']
    },
    featured:{
        type:Boolean,
        default: false
    },
    rating:{
        type:Number,
        default: 4.5
    },
    brand:{
        type:String,
        enum:{
            values:['Apple', 'Samsung', 'LG'],
            message: '{VALUE} is not supported'
        }
        // enum:['Apple', 'Samsung', 'LG']
    },
    created_at:{
        type: Date,
        default: Date.now()
    },
    updated_at:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema)