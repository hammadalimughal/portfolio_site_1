const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const jwtSecret = "secretcodehere";

router.post('/checkuser', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    var success = false;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()[0].msg });
        }
        const { email, password } = req.body;
        let user = await User.findOne({ email })
        if (!user) {
            success = false;
            return res.status(400).json({ error: "Incorrect Credentials" })
        }
        const passwordCompare = (!user.password || user.password == password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Incorrect Credentials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret);
        success = true;
        res.json({success , authToken})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured")
    }
})
module.exports = router