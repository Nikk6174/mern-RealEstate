const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    address : {
        type: String,
        required: true,
    },

    regularPrice:{
        type: Number,
        required: true,
    },

    discountPrice:{
        type: Number,
        required: true,
    },

    bathrooms: {
        type: Number,
        required: true,
    },

    bedrooms: {
        type: Number,
        required: true,
    },

    furnished : {
        type: Boolean,
        required: true,
    },

    parking : {
        type: Boolean,
        required: true,
    },

    //for rent or for sale
    type:{
        type: String,
        required: true,
    },

    offer:{
        type: Boolean,
        required: true,
    },

    imageUrls:{
        type: Array,
        required: true
    },

    //to know which user created this listing
    userRef:{
        type: String,
        required:true
    }
}, {timestamps:true}
)

const Listing = mongoose.model("Listing", listingSchema)

module.exports = Listing