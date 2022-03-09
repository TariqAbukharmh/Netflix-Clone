import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import React from "react";


export default function Home() {

    const [movies, setMovies] = useState();

    async function getData() {

        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);

        let moviesData = await response.json();
        setMovies(moviesData);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1> Home page </h1>
            {
                movies && <MovieList movies={movies} />
            }
        </>
    );
}