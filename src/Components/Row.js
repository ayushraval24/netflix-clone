import instance from '../axios';
import React, { useEffect, useState } from 'react'
import './Row.css';
import Youtube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const displayImg = (path) => {
        if (path == null)
            return "none";
    }

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        }
        else {
            let trailerurl = await instance.get(
                `/movie/${movie.id}/videos?api_key=57f68b8bcdf2daa333422b94dbdc114a`
            );
            setTrailerUrl(trailerurl.data.results[0]?.key);
        }
    }

    useEffect(() => {

        const fetchData = async () => {

            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className="row_container">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img className={`row_poster ${isLargeRow && "row_largePoster"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.poster_path}`}
                        alt={movie.name}
                        key={movie.id}
                        style={{ display: displayImg(movie.poster_path) }}
                        onClick={() => { handleClick(movie) }}
                    />
                ))}
            </div>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;