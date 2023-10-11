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

<FunctionAPI name="$isActiveFragment" {params}>
    Inline feature: Same as <code>isActive</code>, but remains true as long as the node is the active component of its folder, even if the folder itself isn't the active fragment.
</FunctionAPI>

