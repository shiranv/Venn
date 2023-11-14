import React from "react";
import axios from "axios";

export const getMovies=async(title:string,page:number)=> {
    const URL=`https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}`
    let result = await axios.get(URL);
    return result;
  }