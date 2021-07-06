export async function request(movie = 'cars') {
    
    const key = 'f951abfb';
    const uri = `http://www.omdbapi.com/?s=${movie}&apikey=${key}`;

    const response = await fetch(uri);

    const result = await response.json();

    let outCome = result.Search;

    return outCome

}

export async function requestID(movie) {
    
    const key = 'f951abfb';
    const uri = `http://www.omdbapi.com/?i=${movie}&apikey=${key}`;

    const response = await fetch(uri);

    const result = await response.json();

    return result

}