import './Search.css'
import { useState } from 'react';


export default function Search() {

    const [searchResults, setSearchResults] = useState([]);

    let searchTerms = '';

    function searchMovie(event) {
        event.preventDefault();
        searchTerms = event.target.value;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=ced0689a78aaafff30d8474a2c9a21db&query=${searchTerms}`)
            .then(response => response.json)
            .then(data => setSearchResults(data.results))
        console.log(searchResults);

    }

    return (
        <div className="search">
            <div className="search-container">
                <form className="search" onSubmit={(event) => searchMovie(event)}>
                    <input type="text" className="search__input" />
                </form>
            </div>
            <div className="results">
                {searchTerms !== '' ? `<h2>Has buscado: ${searchTerms}</h2>` : ''}
            </div>
        </div>
    )
}
