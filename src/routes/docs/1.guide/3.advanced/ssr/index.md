**SSR in R3 is experimental**

For SSR, it is recommended to use Routify with Vite and `@roxi/routify/vite-plugin`.

#### To use SSR with Vite
1. Enable `ssr.enable` in Routify's Vite plugin and `compilerOptions.hydratable` in Svelte's Vite plugin.
```javascript
// vite.config.js
...
plugins: [
  routify({ ssr: { enable: true } })
  svelte({ compilerOptions: { hydratable: true } })
]
```
2. Enable `hydrate` in your app.
```javascript
// src/main.js
...
new App({ target: document.body, hydrate: true })
```

#### Prerendering

Apps can be prerendered by enabling `ssr.prerender` in Routify's Vite plugin.