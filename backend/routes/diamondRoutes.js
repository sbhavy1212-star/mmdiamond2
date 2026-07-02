const express = require("express");
const router = express.Router();

const auth =
    require("../middleware/authMiddleware");

const {
    getAllDiamonds,
    getAvailableDiamonds,
    getDiamondById,
    addDiamond,
    updateDiamond,
    deleteDiamond
} = require(
    "../controllers/diamondController"
);

router.get(
    "/available",
    getAvailableDiamonds
);

router.get(
    "/:id",
    getDiamondById
);

router.get(
    "/",
    auth,
    getAllDiamonds
);

router.post(
    "/",
    auth,
    addDiamond
);

router.put(
    "/:id",
    auth,
    updateDiamond
);

router.delete(
    "/:id",
    auth,
    deleteDiamond
);

module.exports = router;