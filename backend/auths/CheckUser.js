const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post('/checkuser', async (req,res) => {
    var success = false;
    const {email,password} = req.body;
    let user = await User.findOne({email})
    const passwordCompare = (user.password == password)
    if (!user || !passwordCompare) {
        success = false;
        return res.status(400).json({ error: "Incorrect Credentials" })
    }
    const data = {
        user: {
            id: user.id
        }
    }
    res.json(data)
})
module.exports = router