const User = require("../models/User");

exports.createUser = async (req, res) => {
    const user = await User.create(req.body);
    try {
        res.status(201).json({
            status: "success",
            user,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
};