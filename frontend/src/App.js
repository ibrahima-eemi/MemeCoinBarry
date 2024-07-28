import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Home from './pages/Home';
import CreateMeme from './pages/CreateMeme';
import MemeList from './components/MemeList';
import './App.css';

function App() {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/memes')
            .then(response => response.json())
            .then(data => setMemes(Array.isArray(data) ? data : []))
            .catch(error => console.error('Error fetching memes:', error));
    }, []);

    const addMeme = (formData) => {
        fetch('http://localhost:3001/api/memes', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(newMeme => {
                if (newMeme && newMeme._id) {
                    setMemes([...memes, newMeme]);
                }
            })
            .catch(error => console.error('Error adding meme:', error));
    };

    const removeMeme = (id) => {
        fetch(`http://localhost:3001/api/memes/${id}`, {
            method: 'DELETE',
        })
        .then(() => setMemes(memes.filter(meme => meme._id !== id)))
        .catch(error => console.error('Error deleting meme:', error));
    };

    return (
        <Router>
            <Container maxWidth="lg">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            MemeCoin
                        </Typography>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/create-meme">Create Meme</Button>
                    </Toolbar>
                </AppBar>
                <Box mt={2}>
                    <Routes>
                        <Route path="/" element={<Home memes={memes} removeMeme={removeMeme} />} />
                        <Route path="/create-meme" element={<CreateMeme addMeme={addMeme} />} />
                    </Routes>
                </Box>
            </Container>
        </Router>
    );
}

export default App;
