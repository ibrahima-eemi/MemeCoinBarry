// frontend/src/pages/Home.js
import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
    marginTop: '20px',
    textAlign: 'center',
});

const ImageWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
});

const StyledImage = styled('img')({
    width: '200px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
});

const Home = () => {
    return (
        <StyledContainer>
            <Typography variant="h4" component="h1">Welcome to MemeCoin</Typography>
            <Typography variant="body1">Your go-to platform for sharing and creating memes.</Typography>
            <ImageWrapper>
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
                <StyledImage src="/images/memes-8280093_1280.jpg" alt="Sample 1" />
                <StyledImage src="/images/the-eiffel-tower-1744574_1280.jpg" alt="Sample 2" />
                <StyledImage src="/images/5WrC_SwIzEbwA46pG7C_SJwy2znovO4F1JRT7166Bz8.webp" alt="Sample 3" />
            </ImageWrapper>
        </StyledContainer>
    );
};

export default Home;
