import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../axios'
import requests from '../requests'
import Youtube from 'react-youtube';

const Banner = () => {

    let button;
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            const fetchedMovies = await instance.get(requests.fetchTrending);
            setMovie(fetchedMovies.data.results[Math.floor(Math.random() * fetchedMovies.data.results.length - 1)])
            return fetchedMovies;
        }
        fetchData();
    }, [])

    const cropLength = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        }
        else {
            const fetchurl = await instance.get(`/movie/${movie.id}/videos?api_key=57f68b8bcdf2daa333422b94dbdc114a`);
            console.log(fetchurl);
            setTrailerUrl(fetchurl.data.results[0]?.key);
        }
    }

    if (trailerUrl) {
        button = "Pause"
    }
    else {
        button = "Play"
    }

    return (
        <>
            <header style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%"
            }} className="banner">
                <div className="banner_container">
                    <h1 className="banner_title">{movie?.original_title}</h1>
                    <div className="banner_buttons">
                        <button className="banner_button" onClick={() => { handleClick(movie) }}>{button}</button>
                        <button className="banner_button">MyList</button>
                    </div>
                    <div className="banner_content">
                        {cropLength(movie?.overview, 150)}
                    </div>
                </div>
                <div className="box_fade"></div>
            </header>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </>
    )
}

export default Banner;
