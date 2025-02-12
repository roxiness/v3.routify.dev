While Routify 3 shares the name with Routify 1 and 2, it’s a completely new routing framework built from scratch. As a result, there’s no direct upgrade path, but here are the most significant changes:

- **Default routes path:** `src/pages` to `src/routes`
- **Deprecated helpers**: 
  - `$metatags`
  - `$focus`
  - `$ready` (Routify 3 currently only supports Svelte's native SSR)
  - `$prefetch` →  `data-routify-prefetch-data`
  - `$route` → `$activeRoute`
  - `$isChangingPage` → `$pendingRoute`
  - `$leftover` → `spread parameters`
  - `$afterPageLoad` →  `$afterRouteRendered`
  - `$page` → `$route.leaf`
  - `$layout` → `$node`
  - `$getConcestor` → `$getMRCA`

- The first `.` in relative paths (`$url` and `$goto`) now refers to the component itself, not the parent module.
- `<slot scoped={data} />` → `<slot props={data}>`. Props can be accessed at `export let context.props`.
- `<!-- routify:option -->` → `<!-- routify:meta -->`
- `_fallback.svelte` deprecated → use `[...404].svelte` or similar (spread param path).
- For configuring `main.js`, `App.svelte` and `index.html`, refer to the starter templates: (`npm init routify@latest`).
