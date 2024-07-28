import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MemeList = ({ memes, removeMeme }) => {
    return (
        <List>
            {memes.map((meme) => (
                <ListItem key={meme._id}>
                    <img src={`http://localhost:3001/uploads/${meme.image}`} alt={meme.text} style={{ marginRight: 20, height: 100 }} />
                    <ListItemText
                        primary={meme.text}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => removeMeme(meme._id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default MemeList;
