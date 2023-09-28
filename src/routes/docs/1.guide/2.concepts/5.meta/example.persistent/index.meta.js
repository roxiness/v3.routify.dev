/**
 * [file].meta.js files provides metadata for nodes.
 * They can be used instead of - or along with - inlined metadata.
 */

/** we don't want to blow through our API request limit so we're only going to 
   refresh the requests when building for production */
const shouldRefresh = false // ROUTIFY-REPLACE const shouldRefresh = process.env::WEDGE::.NODE_ENV === 'production'

/**
 * @param {MetaContext} context
 */
export default async ({ split, persist }) => {
    // fetch some movies
    const fetchMovies = async () => {
        const response = await fetch('https://swapi.dev/api/films')
        const data = await response.json()
        return data.results
    }

    /* instead of calling fetchMovies directly, we call it through `persist`
       this will store the result in a .json on disk
       subsequent calls are fetched from disk when available */
    const films = await persist(fetchMovies, shouldRefresh)

    return {
        movies: films.map(film => ({
            // we return the title as normal data
            title: film.title,
            // but we split the rest of the data, so it only loads when fetchMyData is called
            fetchMyData: split(film),
        })),
    }
}
