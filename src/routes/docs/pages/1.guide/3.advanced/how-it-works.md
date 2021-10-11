While Routify 3 is fairly complex, we'll try to boil down the internal mechanics in the following sections.

### Rendering a page

The following process, shows a simplified example of how Routify renders a page.

#### 1. Get the current URL

For most cases this URL is read from the browser, but it can also be stored internally in Routify or in `localStorage`. Since this chapter covers rendering, we'll skip URL resolution and just declare an URL instead.

```javascript
const url = 'shop/products/timemachine'
```

#### 2. Turn the url into an array URL fragments

A fragment is a class that contains the node (the component) that matches the URL fragment.

```javascript
const urlParts = url.split('/') // ['shop', 'products', 'timemachine']

// create fragments
const fragments = urlParts.map((part) => new Fragment(part))
```

#### 3. Render the URL
To render the corresponding page, Routify travels through the fragments till there are non left.
```html
<script>
  export let fragments
  [fragment, ...restFragments] = fragments
</script>

<!-- render the shop component -->
<svelte:component this="{fragment.node.component}">
  <!-- render nested components (products and timemachine) -->
  <svelte:self fragments="{restFragments}" />
</svelte:component>
```
