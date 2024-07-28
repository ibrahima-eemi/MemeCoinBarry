const Meme = require('../models/memeModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

exports.uploadMiddleware = upload.single('image');

exports.createMeme = async (req, res) => {
    try {
        const { text } = req.body;
        const image = req.file.filename;

        const newMeme = new Meme({ text, image });
        await newMeme.save();

        res.status(201).json(newMeme);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getMemes = async (req, res) => {
    try {
        const memes = await Meme.find();
        res.status(200).json(memes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteMeme = async (req, res) => {
    try {
        const { id } = req.params;
        await Meme.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
