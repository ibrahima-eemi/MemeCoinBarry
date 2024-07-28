// backend/routes/memeRoutes.js
const express = require('express');
const multer = require('multer');
const { createMeme, getMemes, deleteMeme } = require('../controllers/memeController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), createMeme);
router.get('/', getMemes);
router.delete('/:id', deleteMeme);

module.exports = router;
