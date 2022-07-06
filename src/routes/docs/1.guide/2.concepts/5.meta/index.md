<script>
    import Example from '#cmp/Example.svelte'
</script>


<!-- routify:meta order=20 -->

Metadata is the heart of Routify. Each page and module has its own metadata. Metadata can be accessed without loading or visiting the component and it can contain anything from Routify settings to custom data.

### Using meta for custom logic
Say you wanted to build auto generated navigation, but you don't want unpublished pages to be included. To solve this we can add a custom metadata prop as such
```
<!-- routify::meta draft=true -->
```

In our navigation generation we can then filter pages and modules based on our new custom property.

```html
{#each nodes.filter(node => !node.meta.draft) as node}
  <a href={node.path} >{node.name}</a>
{/each}
```

---

### Writing metadata

#### Inlined

Metadata can be written as HTML comments.
```
<!-- routify::meta property=[value] -->
```
The value is parsed as a JSON value. If the value is omitted it will set to true. Hence `property=true` can be written simply as `property`.


### Using meta to run scripts and fetch data at buildtime

To create dynamic buildtime metadata, we can create a meta js file with the same name as its component. For `movies.svelte`, we would name the metafile `movies.meta.js`


<Example path="../example.plain" focus="index.svelte" title="Structure example" />


#### Dynamic import of metadata
To avoid including too much data in our initial bundle, we can use dynamic imports to make sure that the data is loaded only when we want it.

<Example path="../example.dynamic-import" focus="index.svelte" title="Dynamic import of metadata example" />
    

#### Persistent data
To reduce expensive API calls and lower build time greatly, we can store select data on disk. For sites with 10.000s of API requests this can reduce the build time from hours to milliseconds.

<Example path="../example.persistent" focus="index.svelte" title="Persistent metadata example" />