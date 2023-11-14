import React, { useState } from 'react';
import "./page.css"; 

export const Page=({onSearchChange, totalPages}:any) => {
  const [page, setPage] = useState(0);

  const updatePage= (page:number) => {
    setPage(page);
    onSearchChange('',page); 
  };
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  return ( 
    <div>
      <div className="container">
        {pagesArray.map((pageNumber) => (
          <button className="button" key={pageNumber} onClick={() => updatePage(pageNumber-1)}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};