const API_KEY = "57f68b8bcdf2daa333422b94dbdc114a";

const requests = {
    fetchNetflixOriginal: `/discover/movie?api_key=${API_KEY}&with_networks=125&page=2`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28&page=3`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchDocumentry: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
}

export default requests;