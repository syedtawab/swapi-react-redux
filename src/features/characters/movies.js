import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMoviesAsync, selectMovies } from './moviesSlice';

export function Movies(props) {

    const dispatch = useDispatch();
    const lstMovies = useSelector(selectMovies);

    useEffect(() => {
        if(props.selectedCharacter.films)
            dispatch(loadMoviesAsync(props.selectedCharacter.films));
      }, [props.selectedCharacter]);
    
    return(
        <>
        <h1>List</h1>
        <ol className="list-group">
          {lstMovies.map(listitem => (
            <li >{listitem.title}</li>
          ))}
        </ol>
        </>
    )
}