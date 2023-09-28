/**
 * [file].meta.js files provides metadata for nodes.
 * They can be used instead of - or along with - inlined metadata.
 *
 * Here the entry would be available as `meta.routify` in the respective node
 * and all its descendants.
 *
 * Current directives are:
 * - split: uses codesplitting / dynamic import for the value. Entries that
 *          use the split tag must be accessed with `await` or `entry.then()`
 */



export default async context => {
    return {
        luke: await fetch('https://swapi.dev/api/people/1/').then(res => res.json()),
        'darth|split': await fetch('https://swapi.dev/api/people/4/').then(res => res.json()),
        leia: {
          value: await fetch('https://swapi.dev/api/people/5/').then(res => res.json()),
          split: true,
        },
      };
}
