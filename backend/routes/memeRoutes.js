// backend/routes/memeRoutes.js
const express = require('express');
const router = express.Router();
const memeController = require('../controllers/memeController');

router.get('/', memeController.getAllMemes);
router.post('/', memeController.upload, memeController.createMeme);
router.delete('/:id', memeController.deleteMeme);

module.exports = router;
