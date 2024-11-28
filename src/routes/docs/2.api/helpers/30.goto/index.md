<script>
    import FunctionAPI from '#cmp/FunctionAPI.svelte'

    const params = {
        path: { type: 'string', text: 'The internal path to the URL, eg.: /blog/[slug]/comments' },        
        params: { type: 'object', text: 'The parameters to be used in the URL. Parameters not used in the path will be appended to the url as a query string.' },
        options: { type: 'urlOptions', object: {
            name: 'urlOptions',
            fields: {
                recursive: { text: 'Returns true if a descendant of the path is active', type: 'boolean' },
                strict: {text: 'Require internal paths. Eg. `/blog/[slug]` instead of `/blog/hello-world`', type: 'boolean'},
                includeIndex: {text: 'Suffix path with `/index`', type: 'boolean'},
                silent: {text: 'Suppress errors', type: 'boolean'},
                mode: {text: 'Mode push to or replace in navigation history', 'type': '"push" | "replace"'},
            }
        } }
    }
</script>

<FunctionAPI name="$goto" {params}>
Programmatic navigation.
</FunctionAPI>
