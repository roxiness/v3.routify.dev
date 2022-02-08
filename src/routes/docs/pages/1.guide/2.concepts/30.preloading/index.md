<script>
    import Example from '#cmp/Example.svelte'
</script>

Preloading happens in the module script (`<script context="module">`) and runs before the component is loaded.

It can be used for anything that needs to happen before the component is loaded, eg. fetching data or protecting pages.

#### Prefetching props
Prefetching data by using a `props` field.
<Example path="../example" title="Props Example "/>

#### Guard / redirect
Protected and redirecting from pages by using a `redirect` field.

<Example focus="protected.md" path="../example.guard" title="Guard Example "/>
