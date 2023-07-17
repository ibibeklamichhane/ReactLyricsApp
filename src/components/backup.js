import React, { useState } from 'react';



const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [singerName, setSingerName] = useState('');
    const [showArtistOptions, setShowArtistOptions] = useState(false);
    const [lyrics, setLyrics] = useState('');
    const handleSearch = async () => {
        try {
          const apiKey = '3e2300fd744c12314b103e24cfa3fe76';
          const response = await fetch(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${searchQuery}&f_artist=${singerName}&apikey=${apiKey}`
          );
    
          if (response.ok) {
            const data = await response.json();
            const track = data.message.body.track_list[0].track;
    
            // Get the track ID to fetch lyrics
            const trackId = track.track_id;
            const lyricsResponse = await fetch(
              `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${apiKey}`
            );
    
            if (lyricsResponse.ok) {
              const lyricsData = await lyricsResponse.json();
              const lyricsBody = lyricsData.message.body.lyrics;
              console.log(lyricsBody )
    
              setLyrics(lyricsBody.lyrics_body);
              
            }
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      const handleChange = (e) => {
        setSearchQuery(e.target.value);
      };
      const handleSingerNameChange = (e) => {
        setSingerName(e.target.value);
      };
    
  return (
   <>
    <div className="mx-auto items-center">
    <input type="text" value={searchQuery} onChange={handleChange} placeholder="Search" />
    <input
        type="text"
        value={singerName}
        onChange={handleSingerNameChange}
        placeholder="Singer Name"
        className="p-2 px-3 items-center border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-52 "  
        
      />

    <button onClick={handleSearch} className=" ml-2 px-4 py-2 bg-blue-500 text-white rounded-full ">Search Lyrics
</button>
   
        
        
        
          <h1 className="text-3xl font-semibold mb-4 ">Song Lyrics</h1>
          <div className="text-center text-lg">{lyrics}</div>
    
          </div>
        </>
        
        

       
    

    
   
  
  
 
    );
};
export default Search;






            
     
      {/*    <div className="max-w-md bg-white p-8 rounded shadow-md">
        
      <h1 className="text-3xl font-semibold mb-4 ">Song Lyrics</h1>
      <div className="text-center text-lg">{lyrics}</div>

      </div>
      <PreviousSearches previousSearches={previousSearches} />*/} 

      {/* Comment */} 