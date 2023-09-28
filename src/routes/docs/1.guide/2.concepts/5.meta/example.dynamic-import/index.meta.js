/**
 * [file].meta.js files provides metadata for nodes.
 * They can be used instead of - or along with - inlined metadata.
 */

/**
 * @param {MetaContext} context
 */
export default async ({ split }) => {
    // fetch some movies
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    const films = data.results


    return {
        movies: films.map(film => ({
            // we return the title as normal data
            title: film.title,
            // but we split the rest of the data, so it only loads when fetchMyData is called
            fetchMyData: split(film)
        }))
    }
}
