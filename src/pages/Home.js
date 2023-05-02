import { useFetch } from "../hooks/usefetch"
import { useState } from "react";
import { ShortenedMovieOverview } from "../Config";
import MovieCard from "../components/MovieCard";
import noImage from '../img/no-image.jpg';


import './Home.css'
import Search from "../components/Search";


export default function Home() {

    const [movieListPage, setMovieListPage] = useState(1)
    const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES&page=${movieListPage}`;

    const [movieList, setMovieList] = useState([]);
    useFetch(UPCOMING_URL, setMovieList);

    return (
        <div className="main">
            <Search movieList={movieList} setMovieList={setMovieList} />
            <h1 className="home-title">Últimos estrenos</h1>
            {/* <Search setMovieList={setMovieList} movieList={movieList} /> */}
            <div className="movie-list">
                {
                    movieList.map(movie => {
                        return (
                            <MovieCard
                                key={movie.id}
                                movieImg={movie.poster_path === null ? noImage : `https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                                movieTitle={movie.title}
                                movieOverview={ShortenedMovieOverview(movie.overview)}
                                movieDate={movie.release_date}
                                movieRating={movie.vote_average}
                                movieID={movie.id} />
                        )
                    })
                }
                <div className="pagination">
                    <ul className="pagination__list">
                        <li onClick={() => setMovieListPage(1)} className={movieListPage === 1 ? "active" : ""}>1</li>
                        <li onClick={() => setMovieListPage(2)} className={movieListPage === 2 ? "active" : ""}>2</li>
                        <li onClick={() => setMovieListPage(3)} className={movieListPage === 3 ? "active" : ""}>3</li>
                        <li onClick={() => setMovieListPage(4)} className={movieListPage === 4 ? "active" : ""}>4</li>
                        <li onClick={() => setMovieListPage(5)} className={movieListPage === 5 ? "active" : ""}>5</li>
                        <li onClick={() => setMovieListPage(6)} className={movieListPage === 6 ? "active" : ""}>6</li>
                        <li onClick={() => setMovieListPage(7)} className={movieListPage === 7 ? "active" : ""}>7</li>
                        <li onClick={() => setMovieListPage(8)} className={movieListPage === 8 ? "active" : ""}>8</li>
                        <li onClick={() => setMovieListPage(9)} className={movieListPage === 9 ? "active" : ""}>9</li>
                        <li onClick={() => setMovieListPage(10)} className={movieListPage === 10 ? "active" : ""}>10</li>
                        <li onClick={() => setMovieListPage(11)} className={movieListPage === 11 ? "active" : ""}>11</li>
                        <li onClick={() => setMovieListPage(12)} className={movieListPage === 12 ? "active" : ""}>12</li>
                        <li onClick={() => setMovieListPage(13)} className={movieListPage === 13 ? "active" : ""}>13</li>
                        <li onClick={() => setMovieListPage(14)} className={movieListPage === 14 ? "active" : ""}>14</li>
                    </ul>
                </div >
            </div >
        </div >
    )
}