const mongoose = require('mongoose');

const {Schema} = mongoose;

const themeSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    mobileScreenshot:{
        type: String,
        required: true,
    },
    laptopScreenshot:{
        type: String,
        require: true,
    },
    author:{
        type: String,
        required: true,
    },
    supportedFeatures:[
        {
            type: String
        }
    ],
    themePath:{
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        default: true,
    }
},{
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
})


module.exports = mongoose.model('themes',themeSchema)