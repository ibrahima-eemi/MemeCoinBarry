// backend/controllers/memeController.js
const Meme = require('../models/Meme');
const { validateMeme } = require('../validation');
const logger = require('../logger');

exports.getAllMemes = async (req, res) => {
    try {
        const memes = await Meme.find();
        res.json(memes);
    } catch (error) {
        logger.error(`Error fetching memes: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};

exports.createMeme = async (req, res) => {
    const { error } = validateMeme(req.body);
    if (error) {
        logger.warn(`Validation error: ${error.details[0].message}`);
        return res.status(400).json({ message: error.details[0].message });
    }

    const meme = new Meme({ text: req.body.text });
    try {
        const newMeme = await meme.save();
        logger.info('New meme created');
        res.status(201).json(newMeme);
    } catch (error) {
        logger.error(`Error creating meme: ${error.message}`);
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMeme = async (req, res) => {
    try {
        await Meme.findByIdAndDelete(req.params.id);
        logger.info('Meme deleted');
        res.json({ message: 'Meme deleted' });
    } catch (error) {
        logger.error(`Error deleting meme: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};
