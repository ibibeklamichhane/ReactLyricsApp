import React from 'react';

const LyricsDisplay = ({ lyrics }) => {
  return (
    <>

    {lyrics && (
       <div className="lyrics-container absolute top-20 left-0 w-full">
        <div className="max-w-md bg-cyan-300 p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4 ">Song Lyrics</h1>
        <div className="text-center text-lg">{lyrics}</div>
    </div>
    </div>
    )}
    </>
  );
};

export default LyricsDisplay;




