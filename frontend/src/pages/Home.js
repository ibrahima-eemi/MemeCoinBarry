import React from 'react';
import { Typography, Box } from '@mui/material';
import MemeList from '../components/MemeList';

const Home = ({ memes, removeMeme }) => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Welcome to MemeCoin
            </Typography>
            <Typography variant="body1" gutterBottom>
                Your go-to platform for sharing and creating memes.
            </Typography>
            <MemeList memes={memes} removeMeme={removeMeme} />
        </Box>
    );
};

export default Home;
