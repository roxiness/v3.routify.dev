/**
 * [file].meta.js provides metadata for nodes.
 * It can be used instead of - or along with - inlined metadata.
 */

/**
 * @param {MetaContext} ctx
 */
export default async ctx => {
    // fetch luke skywalker data
    const response = await fetch('https://swapi.py4e.com/api/people/1/')
    const luke = await response.json()

    return { luke }
}
