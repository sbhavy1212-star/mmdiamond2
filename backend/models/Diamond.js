const mongoose = require("mongoose");

const diamondSchema =
new mongoose.Schema(
{
    stockId: {
        type: String,
        required: true,
        unique: true
    },

    status: {
        type: String,
        default: "Available"
    },

    shape: String,
    carat: Number,
    color: String,
    purity: String,
    cut: String,
    lab: String,
    certificateNumber: String,
    measurement: String,
    perCtPrice: Number,
    totalPrice: Number,
    imageUrl: String,
    videoUrl: String
},
{
    timestamps: true
});

module.exports =
mongoose.model(
    "Diamond",
    diamondSchema
);