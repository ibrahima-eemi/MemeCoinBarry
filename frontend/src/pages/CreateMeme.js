import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const CreateMeme = ({ addMeme }) => {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('text', text);
        formData.append('image', file);
        addMeme(formData);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Create a New Meme
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <TextField
                        label="Meme Text"
                        variant="outlined"
                        fullWidth
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" component="span">
                            Choose Image
                        </Button>
                    </label>
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Add Meme
                </Button>
            </form>
        </Container>
    );
};

export default CreateMeme;
