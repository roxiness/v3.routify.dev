<script>
    import { resolveNode } from '@roxi/routify'
    import FunctionAPI from '#cmp/FunctionAPI.svelte'


    const updateParams = {
        callback: {
            type: 'function',
            text: 'Receives the current params and returns the new params object.'
        }
    }
</script>


<FunctionAPI name="$updateParams" params={updateParams}>
    Update the current route's parameters using a callback.    
</FunctionAPI>
