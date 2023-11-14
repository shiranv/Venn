import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Search } from "../search/search";
import {Movie} from "../movie/movie";
import { Page } from "../Page/page";

import * as helper from '../../stateHelper'

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state:any) => state);
    const onSearchChange = async(title:string,page:number) => {
        title= title==''?state.title:title;
        const movies = await helper.getMovies(title,page);     
        dispatch({ type: 'UPDATE_MOVIES_LIST', value: movies.data });
        dispatch({ type: 'UPDATE_TITLE', value: title });
      };
    const onSortByYear=()=>{
            dispatch({ type: 'SORT_BY_YEAR', value: '' });
    } 
    const onSortByName=()=>{
        dispatch({ type: 'SORT_BY_NAME', value: '' });
}  
    return <div>
        <Search onSearchChange={onSearchChange}></Search>
        <Movie moviesList={state.moviesList} onSortByYear={onSortByYear} onSortByName={onSortByName}></Movie>
        <Page onSearchChange={onSearchChange} totalPages={state.total_pages} ></Page>
    </div>;
}
export default Home; 

