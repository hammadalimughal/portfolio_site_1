const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../../models/User');


// const { body} = require('express-validator');

router.post('/registeruser', [
    body('name', "Name must contain atleast 3 characters").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()[0].msg });
        }
        const { email } = req.body
        let userCheck = await User.findOne({ email })
        if (userCheck) {
            res.status(400).send("User Already Exists")
        }
        else {
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            res.json(user)
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured")
    }
})
module.exports = router