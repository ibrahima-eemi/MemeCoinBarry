const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const memeRoutes = require('./routes/memeRoutes');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques du répertoire "uploads"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/memes', memeRoutes);

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/memecoin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
