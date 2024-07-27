// backend/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const memeRoutes = require('./routes/memeRoutes');
const logger = require('./logger');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Fonction de connexion à MongoDB avec réessai
const connectWithRetry = () => {
    mongoose.connect('mongodb://localhost:27017/memecoins')
        .then(() => logger.info('Connected to MongoDB'))
        .catch(err => {
            logger.error(`Failed to connect to MongoDB: ${err.message}`);
            setTimeout(connectWithRetry, 5000); // réessayer après 5 secondes
        });
};

connectWithRetry();

app.use('/api/memes', memeRoutes);

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
