import './Search.css'
import { useState } from 'react';


export default function Search({ setMovieList }) {

    const [searchTerms, setSearchTerms] = useState('');

    // useEffect(() => {
    //     searchTerms !== '' && fetch(`https://api.themoviedb.org/3/search/movie?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES&query=${searchTerms}`)
    //         .then(response => response.json)
    //         .then(data => setMovieList(data.results))
    // }, [searchTerms, setMovieList])

    const handleSearch = e => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES&query=${searchTerms}`)
            .then(response => response.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className="search">
            <div className="search-container">
                <form className="search" onSubmit={handleSearch}>
                    <input
                        value={searchTerms}
                        type="text"
                        className="search__input"
                        onChange={e => setSearchTerms(e.target.value)}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </div>
            <div className="results">
                <h2 className='search-terms'>{searchTerms !== '' ? `Búsqueda: ${searchTerms}` : ''}</h2>
            </div>
        </div>
    )
}
