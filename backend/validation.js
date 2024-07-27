// backend/validation.js
const Joi = require('joi');

const validateMeme = (data) => {
    const schema = Joi.object({
        text: Joi.string().required(),
    });
    return schema.validate(data);
};

module.exports = { validateMeme };
