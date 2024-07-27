// src/components/App.js
import React from 'react';
import Header from './Header';
import MemeList from './MemeList';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header />
            <MemeList />
        </div>
    );
}

export default App;
