<script>
    import { resolveNode } from '@roxi/routify'
    import FilesViewer from '#cmp/FilesViewer.svelte'
    import Example from '#cmp/Example.svelte'
    import FunctionAPI from '#cmp/FunctionAPI.svelte'

    const params = {
        path: { type: 'string | \'$leaf\'', text: 'The internal path to the node, eg.: /blog/[slug]/comments. Use \'$leaf\' to get the URL for the current leaf node.' },
        params: { type: 'object', text: 'The parameters to be used in the URL. Parameters not used in the path will be appended to the url as a query string.' },        
    }
</script>




<FunctionAPI name="$url" {params}>
    Creates URLs from internal paths and parameters.    
</FunctionAPI>


<Example path="../example" title="URL Example" />
