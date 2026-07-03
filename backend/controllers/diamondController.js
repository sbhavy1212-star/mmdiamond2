const Diamond = require("../models/Diamond");

exports.getAllDiamonds = async (req, res) => {
    try {
        const diamonds =
            await Diamond.find();

        res.json(diamonds);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getAvailableDiamonds =
async (req, res) => {
    try {

        const diamonds =
            await Diamond.find({
                status: "Available"
            });

        res.json(diamonds);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getDiamondById =
async (req, res) => {
    try {

        const diamond =
            await Diamond.findById(
                req.params.id
            );

        if (!diamond) {
            return res.status(404).json({
                message:
                    "Diamond not found"
            });
        }

        res.json(diamond);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.addDiamond =
async (req, res) => {
    try {

        console.log(req.body);

        const diamond =
            await Diamond.create(
                req.body
            );

        console.log(diamond);

        res.status(201).json({
            message: "Diamond Added",
            diamond
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
};
exports.updateDiamond =
async (req, res) => {
    try {

        const diamond =
            await Diamond.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        res.json({
            message:
                "Diamond Updated",
            diamond
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.deleteDiamond =
async (req, res) => {
    try {

        await Diamond.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:
                "Diamond Deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};