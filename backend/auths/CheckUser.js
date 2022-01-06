const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post('/checkuser', async (req,res) => {
    var success = false;
    try{
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
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Some Error Occured")
    }
})
module.exports = router