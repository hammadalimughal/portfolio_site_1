const express = require('express');
const User = require('../models/User');
const router = express.Router();
// const { body} = require('express-validator');

router.post('/registeruser', async (req, res) => {
    let userCheck = await User.findOne({email})
    if(userCheck){
        res.status(200).send("Some Error Occured")
    }
    // if(error){
    //     console.error(error.message);
    //     res.status(200).send("Some Error Occured")
    // }
    console.log("process")
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.json({ user })
})
module.exports = router