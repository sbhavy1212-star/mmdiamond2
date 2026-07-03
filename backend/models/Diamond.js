const mongoose = require("mongoose");

const diamondSchema =
new mongoose.Schema(
{
    stockId: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true
    },

    status: {
        type: String,
        enum: [
            "Available",
            "Hold",
            "Sold",
            "Memo"
        ],
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

diamondSchema.index({
    stockId: 1,
    shape: 1,
    color: 1
});

module.exports =
mongoose.model(
    "Diamond",
    diamondSchema
);