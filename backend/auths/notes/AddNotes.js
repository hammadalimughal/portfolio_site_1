const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../../middleware/fetchuser');
const Note = require('../../models/Notes');
const router = express.Router();


router.post('/addnotes', fetchuser, [
    body('title', "title must contain atleast 3 characters").isLength({ min: 3 }),
    body('description', "description must contain atleast 15 characters").isLength({ min: 15 }),
], async(req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()){
            return res.status(400).json({ errors: error.array()});
        }
        const { title, description } = req.body;
        newNote = await Note.create({
            title: title,
            description: description
        })
        res.send(newNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;