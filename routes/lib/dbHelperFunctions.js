const fs = require("fs");
const path = require("path");

// write a new note
const newNote = (body, notesArr) => {
    notesArr.push(body);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notesArr)
    );
};

// validate a note
const validate = note => {
    if (!note.title || !note.text) {
        return false;
    } else {
        return true;
    }
};

// update an existing note
const update = notesArr => {
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notesArr)
    );
};

module.exports = { newNote, validate, update}