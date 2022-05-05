import './Search.css'
import { useState, useEffect } from 'react';


export default function Search({ setMovieList, movieList }) {

    const [searchTerms, setSearchTerms] = useState('');

    useEffect(() => {
        searchTerms !== '' && fetch(`https://api.themoviedb.org/3/search/movie?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES&query=${searchTerms}`)
            .then(response => response.json)
            .then(data => setMovieList(data.results))
    }, [searchTerms, setMovieList])

    const handleSearch = e => setSearchTerms(e.target.value);

    return (
        <div className="search">
            <div className="search-container">
                <form className="search">
                    <input
                        value={searchTerms}
                        type="text"
                        className="search__input"
                        onChange={handleSearch} />
                </form>
            </div>
            <div className="results">
                <h2>{searchTerms !== '' ? `Has buscado: ${searchTerms}` : ''}</h2>
            </div>
        </div>
    )
}
