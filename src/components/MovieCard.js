import './MovieCard.css'
import { useNavigate } from 'react-router-dom';
export default function MovieCard({ movieImg, movieRating, movieTitle, movieOverview, movieDate, movieID }) {

    let navigate = useNavigate();
    function handleClick() {
        navigate(`/pelicula/${movieID}`)
    }

    return (
        <>

            <div className="movie-card">
                <a onClick={handleClick} className="movie-card__link">
                    <div className="movie-card__img">
                        <img src={movieImg} title={movieTitle} alt={movieTitle} />
                    </div>
                </a>
                <div className="movie-card__content">
                    <div className="movie-card__info">
                        <h2 className="movie-card__info-title">{movieTitle}</h2>
                        <p className="movie-card__info-story">{movieOverview}</p>
                    </div>
                    <div className="movie-card__details">
                        <p className="movie-card__details-date">{movieDate}</p>
                        <span className="movie-card__info-rate">Valoración: {movieRating}</span>
                    </div>
                    <div className="movie-card__link-container"><a onClick={handleClick} className="movie-card__link">Ver más</a></div>
                </div>
            </div>

        </>
    )
}