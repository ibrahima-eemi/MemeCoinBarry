import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <AppBar position="static" className="custom-header">
            <Toolbar>
                <Typography variant="h6" className="title">
                    MemeCoin
                </Typography>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create Meme</Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
