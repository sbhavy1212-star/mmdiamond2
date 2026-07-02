require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI);

async function createAdmin() {
    try {
        const hashedPassword = await bcrypt.hash(
            "admin123",
            10
        );

        await Admin.create({
            username: "admin",
            password: hashedPassword
        });

        console.log("Admin Created Successfully");

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

createAdmin();