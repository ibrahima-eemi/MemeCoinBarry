// frontend/src/components/MemeList.js
import React from 'react';

const MemeList = ({ memes, removeMeme }) => {
    return (
        <div>
            {memes.map((meme) => (
                <div key={meme._id}>
                    <p>{meme.text}</p>
                    {meme.imageUrl && <img src={meme.imageUrl} alt={meme.text} />}
                    <button onClick={() => removeMeme(meme._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default MemeList;
