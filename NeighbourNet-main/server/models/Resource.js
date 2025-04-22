const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["Food and Groceries",
            "Clothing and Accessories",
            "Electronics and Gadgets",
            "Books and Stationery",
            "Vehicles and Transportation",
            "Home Goods and Furniture",
            "Tools and Hardware",
            "Health and Medical Supplies",
            "Baby and Childcare Products",
            "Educational Materials",
            "Hygiene and Personal Care Products",
            "Cleaning Supplies",
            "Pet Supplies",
            "Art and Craft Supplies",
            "Sports Equipment",
            "Gardening Supplies",
            "Outdoor Gear and Camping Equipment",
            "Appliances (Large and Small)",
            "Musical Instruments",
            "Office Supplies",
            "Home Decor",
            "Toys and Games",
            "Fitness and Exercise Equipment",
            "Party and Event Supplies",
            "Safety Equipment",
            "Building Materials",
            "Computers and IT Equipment",
            "Bicycles and Scooters",
            "Entertainment (Movies, DVDs, etc.)",
            "Travel and Luggage",
            "Jewelry and Watches",
            "Crafted or Handmade Goods",
            "DIY Kits and Materials"]
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["received", "notreceived"],
        default: "notreceived"
    },
    responders: [{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Resource', ResourceSchema);