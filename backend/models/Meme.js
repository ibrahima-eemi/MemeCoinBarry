// backend/models/Meme.js
const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Meme', memeSchema);
