const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const authHeader =
            req.header("Authorization");

        if (!authHeader) {
            return res.status(401).json({
                message: "Access Denied. No token provided."
            });
        }

        if (
            !authHeader.startsWith(
                "Bearer "
            )
        ) {
            return res.status(401).json({
                message: "Invalid Token Format"
            });
        }

        const token =
            authHeader.replace(
                "Bearer ",
                ""
            );

        const decoded =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};

module.exports =
    authMiddleware;