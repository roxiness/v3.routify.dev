<script>
    import FunctionAPI from '#cmp/FunctionAPI.svelte'

    const params = {
        path: { type: 'string', text: 'The internal path to the URL, eg.: /blog/[slug]/comments' },        
        params: { type: 'object', text: 'The parameters to be used in the URL. Parameters not used in the path will be appended to the url as a query string.' },
        options: { type: 'urlOptions', default: '{ recursive: true }', object: {
            name: 'urlOptions',
            fields: {
                recursive: { text: 'Returns true if a descendant of the path is active', type: 'boolean' }
            }
        } }
    }
</script>

<FunctionAPI name="$isActive" {params}>
    Returns <code>true</code> for active paths.
</FunctionAPI>

