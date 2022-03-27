import { useEffect, useState } from 'react';

import './SingleMovie.css';

export default function SingleMovie({ movieCover, movieImg, movieRating, movieTitle, movieOverview, movieDate, currentMovieID, linkToIMDB, movieTagline }
) {

    const [movieGenres, setMovieGenres] = useState([])
    const [movieProductions, setMovieProductions] = useState([])
    const CURRENT_URL = `https://api.themoviedb.org/3/movie/${currentMovieID}?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES`;

    useEffect(() => {
        fetch(CURRENT_URL)
            .then(response => response.json())
            .then(data => {
                setMovieGenres(data.genres);
                setMovieProductions(data.production_companies)
            })
    }, [CURRENT_URL])


    return (
        <div className="single-movie">


            <div className="single-movie__cover">
                <img src={`https://image.tmdb.org/t/p/original/${movieCover}`} title={`Portada de ${movieTitle}`} alt={`Portada de ${movieTitle}`} />
            </div>

            <div className="single-movie__content">
                <div className="single-movie__content-header">
                    <div className="single-movie__content-header-img">
                        <img src={`https://image.tmdb.org/t/p/original/${movieImg}`} title={`Póster de ${movieTitle}`} alt={`Póster de ${movieTitle}`} />
                    </div>
                    <div className="single-movie__content-header-details">
                        <h1>{movieTitle}</h1>
                        <p>Valoración: {movieRating}/10</p>
                        <p>{movieDate}</p>
                        <a href={`https://www.imdb.com/title/${linkToIMDB}`} rel="noopener noreferrer" target="_blank" className="movie-card__link">Ver en IMDB</a>
                    </div>
                </div>

                <div className="single-movie__content-genres">
                    <ul className=" single-movie__content-genres-list">
                        {
                            movieGenres.map(genre => {
                                return <li key={genre.name}>{genre.name}</li>
                            })
                        }
                    </ul>
                </div>

                <div className="single-movie__content-synopsis">
                    <h2>Sinopsis</h2>
                    <p>{movieOverview}</p>
                </div>

                <div className="single-movie__content-cast">
                    <h2>Productoras</h2>
                    <ul>
                        {
                            movieProductions.map(production => {
                                return <li key={production.id}>
                                    {production.logo_path !== null && <img src={`https://image.tmdb.org/t/p/w300/${production.logo_path}`} title={`Logo de ${production.name}`} alt={`Logo de ${production.name}`} />}

                                </li>
                            })
                        }
                    </ul>
                </div>


            </div>


        </div>
    )
}
