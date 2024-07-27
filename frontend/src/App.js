// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MemeList from './components/MemeList';
import Form from './components/Form';

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
        <div className="App">
            <Header />
            <Form addMeme={addMeme} />
            <MemeList memes={memes} removeMeme={removeMeme} />
        </div>
    );
}

export default App;
