import React, { useState } from 'react';

export const Search=({onSearchChange}:any) => {
  const [title, setTitle] = useState('');

  const updateTitle = (e:any) => {
    setTitle(e.target.value);
  };
  const searchMovie=()=>{
    onSearchChange(title,0);
  }
  return (
    <div>
      <input
        value={title}
        type="text"
        placeholder="movie title"
        onChange={updateTitle}
      />
      <button onClick={searchMovie} placeholder='Search...'>search movie</button>
    </div>
  );
};