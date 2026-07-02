require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const authRoutes =require("./routes/authRoutes");
const auth = require("./middleware/authMiddleware");

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);

app.get("/api/protected", auth, (req, res) => {

    res.json({
        message: "Protected Route Accessed",
        user: req.user
    });

});

app.get("/", (req, res) => {
    res.send("M & M Diamond API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
