// frontend/src/components/Form.js
import React, { useState } from 'react';

const Form = ({ addMeme }) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Text is required');
            return;
        }

        const formData = new FormData();
        formData.append('text', text);
        if (image) {
            formData.append('image', image);
        }

        console.log('Form data:', formData); // Log the form data

        addMeme(formData);
        setText('');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter meme text"
                required
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button type="submit">Add Meme</button>
        </form>
    );
};

export default Form;
