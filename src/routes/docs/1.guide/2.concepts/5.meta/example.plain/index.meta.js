/**
 * [file].meta.js provides metadata for nodes.
 * It can be used instead of - or along with - inlined metadata.
 */

import axios from 'axios'

/**
 * @param {MetaContext} context
 */
export default async () => {
    // fetch luke skywalker data
    const luke = (await axios.get('https://swapi.dev/api/people/1/')).data

    return { luke }
}
