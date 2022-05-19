const router = require('express').Router();
const { uuid } = require('uuidv4');
const notesDb = require('../../db/db.json');
const {newNote, validate, update} = require('../lib/dbHelperFunctions');

// get all notes
router.get("/notes", (req, res) => {
    res.json(notesDb);
})

// post a new note
router.post("/notes", (req, res) => {
    if(!validate(req.body)) {
        res.status(400).send('Please enter a title and text for the note')
    } else {
        req.body.id = uuid();
        res.json(newNote(req.body, notesDb));
        res.json(notesDb)
    }
});

// delete an exiting note
router.delete("/notes/:id", (req, res) => {
    for(let i=0; i<notesDb.length; i++) {
        if(notesDb[i].id === req.params.id) {
            notesDb.splice(i, 1);
            update(notesDb);
            break;
        }
    }
    res.json(notesDb);
    
})

module.exports = router;