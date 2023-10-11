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

#### preloading on hover
You can also optimize user experience by prefetching data on hover. Add the `data-routify-prefetch-data="hover"`` attribute to an anchor element. This triggers data prefetching when the user hovers over the link.

```html
<a href="/next-page" data-routify-prefetch-data="hover">Next Page</a>
```
This enables quicker page loads by initiating data fetching even before the user clicks the link.