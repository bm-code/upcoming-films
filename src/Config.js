function Config() {

    //const API_KEY = 'ced0689a78aaafff30d8474a2c9a21db';

    //const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES';

    //const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES`;

    //const CAST_URL = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES`

    //const REVIEWS_URL = `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=ced0689a78aaafff30d8474a2c9a21db&language=es-ES&page=1`
}

function ShortenedMovieOverview(overview) {
    return overview.substr(0, 100) + '...'
}

export { Config, ShortenedMovieOverview }