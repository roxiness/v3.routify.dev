<script>
    import { resolveNode } from '@roxi/routify'
    import FunctionAPI from '#cmp/FunctionAPI.svelte'

    const setParams = {
        params: { 
            type: 'object', 
            text: 'Key/value pairs of route parameters. Pass undefined as a value to unset a parameter.' 
        }
    }
</script>

<FunctionAPI name="$setParams" params={setParams}>
    Update the current route's parameters.
</FunctionAPI>
