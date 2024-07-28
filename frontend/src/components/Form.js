// frontend/src/components/Form.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Form = ({ addMeme }) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('text', text);
        formData.append('image', image);

        addMeme(formData);
        setText('');
        setImage(null);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <Typography variant="h5" component="div" gutterBottom>
                Add a new Meme
            </Typography>
            <TextField
                label="Meme Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <Button
                variant="contained"
                component="label"
                sx={{ mt: 2, mb: 2 }}
            >
                Choose File
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </Button>
            {image && <Typography variant="body2">{image.name}</Typography>}
            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
            >
                Add Meme
            </Button>
        </Box>
    );
};

export default Form;
