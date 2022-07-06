<script>
    import FunctionAPI from '#cmp/FunctionAPI.svelte'

    const params = {
        path: { type: 'string', text: 'The internal path to the URL, eg.: /blog/[slug]/comments' },        
        params: { type: 'object', text: 'The parameters to be used in the URL. Parameters not used in the path will be appended to the url as a query string.' },        
    }
</script>

<FunctionAPI name="$goto" {params}>
    Programmatic navigation.
</FunctionAPI>

