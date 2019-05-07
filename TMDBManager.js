const API_TOKEN = "4e488e9f4de9ec0b4bae2247ceaeea98";

export function searchWithWord(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&query=' + text;
    console.log(url);
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getImageFromApi(name) {return 'https://image.tmdb.org/t/p/w300' + name;}