// frontend/src/components/CreateMeme.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const CreateMeme = ({ addMeme }) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('text', text);
        formData.append('image', image);
        addMeme(formData);
        setText('');
        setImage(null);
        setPreview(null);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: '20px' }}>
            <TextField
                label="Meme Text"
                variant="outlined"
                fullWidth
                margin="normal"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button variant="contained" component="label" sx={{ marginBottom: '10px' }}>
                Upload Image
                <input type="file" hidden onChange={handleImageChange} />
            </Button>
            {preview && (
                <Box sx={{ marginBottom: '10px' }}>
                    <Typography variant="subtitle1">Image Preview:</Typography>
                    <img src={preview} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
            )}
            <Button type="submit" variant="contained" color="primary">
                Create Meme
            </Button>
        </Box>
    );
};

export default CreateMeme;
