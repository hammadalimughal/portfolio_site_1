const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post('/login', async (req,res) => {
    let success = false;
    const {name,email} = req.body;
    let user = await User.findOne({email})
    if (!user) {
        success = false;
        return res.status(400).json({ error: "Incorrect Credentials" })
    }

})