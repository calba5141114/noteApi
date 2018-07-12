const mongoose = require('mongoose');
let Schema = mongoose.Schema;

var noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

let Note = mongoose.model('Note', noteSchema);

module.exports = Note;