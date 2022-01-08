const express = require('express');
const router = express.Router();
const fetchuser = require("../../middleware/fetchuser");
const User = require('../../models/User');

router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password')
        if(!user){
            res.status(500).send("Please authenticate using a valid token");
        }
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;