// backend/validation.js
const Joi = require('joi');

const memeSchema = Joi.object({
    text: Joi.string().min(1).required()
});

const validateMeme = (data) => {
    return memeSchema.validate(data);
};

module.exports = { validateMeme };
