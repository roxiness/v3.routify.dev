<script>
    import Example from '#cmp/Example.svelte'
</script>

Manually rendering a node can be done by using `node.component` in a a `<svelte:component>`

```html
<svelte:component this="node.component" />
```

#### Rendering multiple nodes
Sometimes you may want to render a specific node. This can be done by iterating over a node's children.
<Example path="../example" title="Rendering nodes manually "/>

<!-- #### Rendering recursively
If some of the inlined nodes are nested in folders, you can render these and their modules. 
<Example path="../example.nested" title="Recursively render nodes manually"/> -->