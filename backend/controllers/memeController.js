// backend/controllers/memeController.js
const Meme = require('../models/Meme');
const { validateMeme } = require('../validation');
const logger = require('../logger');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limite de taille de fichier à 10MB
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    }
});

exports.upload = upload.single('image');

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
    logger.info('Received data:', req.body);
    logger.info('Received file:', req.file);

    const { error } = validateMeme(req.body);
    if (error) {
        logger.warn(`Validation error: ${error.details[0].message}`);
        return res.status(400).json({ message: error.details[0].message });
    }

    const meme = new Meme({
        text: req.body.text,
        imageUrl: req.file ? `/uploads/${req.file.filename}` : null
    });

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
