<script>
    import Example from '#cmp/Example.svelte'
</script>

Inlining a page can be done by using `node.component` in a a `<svelte:component>`

```html
<svelte:component this="node.component" />
```

#### Inlining multiple pages
Often you want multiple pages inlined on a single page. This can be done by iterating over a node's children.
<Example path="../example" title="Inlining pages "/>

#### Inlining recursively
If some of the inlined pages are nested in folders, you can inline these and their modules. That is how this documentation page is rendered.
<Example path="../example.nested" title="Inlining modules "/>