import SingleMovie from '../components/SingleMovie'
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"

export default function SinglePage() {


    const movieLocation = useLocation();
    const currentMovieID = movieLocation.pathname.replace('/pelicula/', '')

    const DETAILS_URL = `https://api.themoviedb.org/3/movie/${currentMovieID}?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES`;

    const [movieDetails, setMovieDetails] = useState({})
    useEffect(() => {
        fetch(DETAILS_URL)
            .then(response => response.json())
            .then(data => setMovieDetails(data))
    }, [DETAILS_URL])


    return (
        <>
            <SingleMovie
                movieDetails={movieDetails}
                setMovieDetails={setMovieDetails}
                movieCover={movieDetails?.backdrop_path}
                movieImg={movieDetails?.poster_path}
                movieRating={movieDetails?.vote_average}
                movieTitle={movieDetails?.title}
                movieOverview={movieDetails?.overview}
                movieDate={movieDetails?.release_date}
                movieGenres={movieDetails?.genres}
                currentMovieID={currentMovieID}
                linkToIMDB={movieDetails?.imdb_id}
                movieProductions={movieDetails?.production_companies}
                movieTagline={movieDetails.tagline} />
        </>
    )
}
