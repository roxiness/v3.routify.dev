Sometimes the filepaths in your project don't match the routes on your server.

Maybe you're doing internationalization or you're hosting your site on a sub-path.

To solve this, we can use URL rewrites.

For example, if we're hosting a site on a basepath like
`/my-app`, we could use the following URL rewrite.

```html
<script context="module">
    import { Router, createRouter } from '@roxi/routify'
    import routes from '../.routify/routes.default.js'

    const router = createRouter({
        routes,
        urlRewrite: {
           toExternal: url => '/my-app' + url,
           toInternal: url => url.replace(/^\\/my-app/, ''),
       }
    })
</script>

<Router {router} />
```

<br>
For advanced projects you could even chain multiple URL rewrites

```javascript
import { basepath, localization } from './my-url-rewrites'

const urlRewrite = [ basepath('my-app'), localization('fr') ]
```