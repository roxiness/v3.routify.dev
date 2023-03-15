URL reflectors determine where the URL of a route is stored.
By default the URL is stored in the address bar (`addressReflector`).

There are three bundled URL reflectors to choose from:
- `addressReflector` (default) stores the URL in the address bar
- `internalReflector` stores the url in memory
- `LocalStorageReflector` stores the url in local storage

```html
<script>
    import { LocalStorageReflector } from '@roxi/routify'
</script>

<Router ... urlReflector={LocalStorageReflector} name="my-router" />
```
