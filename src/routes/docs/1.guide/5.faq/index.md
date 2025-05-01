#### Can I use hashbased navigation?
Yes, hashbased navigation can be added by creating a URL rewrite.
```javascript
urlRewrite: {
    toExternal: url => `#${url}`, // prepend URLs with #
    toInternal: url => url.replace(/^.+#/, ''), // remove leading #
}    
```

#### How do I host on Github Pages
See *Can I use hashbased navigation*

#### How can I enable verbose logging
To enable verbose logging in Routify, open your browser console and enter `__routify.log.level = 4`

**Note**: Make sure that your browser doesn't filter verbose logging.
<details>
<summary>Example
</summary>
<img src="/assets/console-logging.webp" />
</details>

#### How do I get rid of wrapper elements
You can disable the creation of wrapper elements by setting the `anchor` option to `parent`, `firstChild` or `header`. For more information see [Scroll Anchors](/docs/guide/advanced/scroll-anchors).

#### How can I prevent scrolling on navigation
Scrolling can be prevented by adding `data-routify-scroll-lock` in the parent module.
<details>
<summary>Example</summary>

```html
<div data-routify-scroll-lock>
  <slot />
</div>
```

</details>


#### How do I stop Routify from handling `pushState` and `replaceState`?
Set `interceptHistory: false` on the reflector, or disable it per call with `useRoutify: false`.

<details>
<summary>Example: Disable history interception</summary>

```javascript
<script context="module">
  import { Router, createRouter, AddressReflector } from '@roxi/routify'
  import routes from '../.routify/routes.default.js'

  export const router = createRouter({
    routes,
    urlReflector: [AddressReflector, { interceptHistory: false }],
  })
</script>

<Router {router} />
```

```javascript
history.pushState({useRoutify: false}, null, '/ignore/this/call')
```

</details>

