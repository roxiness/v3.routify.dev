<script>
    import { resolveNode } from '@roxi/routify'
    import FilesViewer from '#cmp/FilesViewer.svelte'
    import Example from '#cmp/Example.svelte'
    import FunctionAPI from '#cmp/FunctionAPI.svelte'

    const params = {
        path: { type: 'string', text: 'The internal path to the URL, eg.: /blog/[slug]/comments' },
        params: { type: 'object', text: 'The parameters to be used in the URL. Can be overloaded.' },
        
    }
</script>




<FunctionAPI name="$url" {params}>
    The <code>$url</code> helper creates URLs from internal paths and parameters.    
</FunctionAPI>


<Example path="../example" title="URL Example" />
