
By default each file in Routify is dynamically imported. In most cases this improves load time as less data is required for the first page render.

However, in some cases it may be beneficial to bundle the contents of a folder or even the entire app. To do this we can use the `bundle` meta option.

```
<!-- routify::meta bundle -->
```

Using the bundle option in a folder (_module.svelte), will bundle all its files and folders recursively into a single .js file.
We can even bundle a folder inside a bundled folder. This will create two smaller bundles.
