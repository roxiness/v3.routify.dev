<script>
    import Example from '#cmp/Example.svelte'
</script>

Preloading happens in the module script (`<script context="module">`) and runs before the component is loaded.

I can be used anything that needs to happen before the component is loaded, eg. fetching data or protecting pages.

#### Prefetching props
Data can be prefetched by using a `props` field.
<Example path="../example" title="Props Example "/>

#### Guard / redirect
Pages can be protected and redirected by returning a `redirect` field.

<Example focus="protected.md" path="../example.guard" title="Guard Example "/>
