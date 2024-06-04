**SSR and SSG in R3 is experimental**

Routify can be rendered on the client (CSR), on the server (SSR) and prerendered (SSG).

#### Vite Example 

1. Enable at least one render modes in Routify's Vite plugin. If you're using `ssg` or `ssr`, make sure you enable `compilerOptions.hydratable` in Svelte's Vite plugin.
```javascript
// vite.config.js
import routify from `@roxi/routify/vite-plugin`
...
plugins: [
  routify({ render: { 
    ssr: { enable: true }, // Server Side rendering
    ssg: { enable: true }, // Static Site Generation
    csr: { enable: true} // Client Side Rendering, enabled by default
  }})
  svelte({ compilerOptions: { hydratable: true } })
]
```
2. Enable `hydrate` in your app if you're using `ssg` or `ssr`.
```javascript
// src/main.js
...
new App({ target: document.body, hydrate: true})
```