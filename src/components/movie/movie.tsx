import React from "react";
import "./movie.css"; 

 
interface MovieProps {
  moviesList: movie[];
  onSortByYear: () => void;
  onSortByName: () => void;
}
type movie = {
  page: number;
  Title: string;
  Year:number;
  imdbID:string;
};

export const Movie: React.FC<MovieProps> = ({ moviesList ,onSortByYear, onSortByName}:any) => {

  const sortByYear = () => {
    onSortByYear()  
  };
  const sortByName = () => {
    onSortByName()  
  };
  return (
    <div>
     
     <table className="movie-table">
      <thead>
        <tr>
          <th onClick={sortByName}>Title</th>
          <th onClick={sortByYear}>Year</th>
        </tr>
      </thead>
      <tbody>
        {moviesList.map((movie:movie) => (
          <tr key={movie.imdbID}>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
          </tr>
        ))}
      </tbody>
    </table>
     
    </div>
  );
};