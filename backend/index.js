// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memeRoutes = require('./routes/memeRoutes');
const logger = require('./logger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

app.use('/api/memes', memeRoutes);

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/memes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        logger.info('Connected to MongoDB');
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => logger.error(`Failed to connect to MongoDB: ${error.message}`));
