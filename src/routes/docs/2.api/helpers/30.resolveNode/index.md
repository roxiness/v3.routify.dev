<script>
    import FunctionAPI from '#cmp/FunctionAPI.svelte'

    const params = {
        path: { type: 'string', text: 'Name or path of the node.' },
    }
</script>

<FunctionAPI name="resolveNode" {params}>
    Resolves nodes by their relative or absolute path or their name.
</FunctionAPI>

--- 
**Hint:** name is defined as a meta prop, eg.:  `<!-- routify:meta name="blog" -->`