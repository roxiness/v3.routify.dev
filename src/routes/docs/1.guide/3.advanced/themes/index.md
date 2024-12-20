Themes organize routes into contexts like languages (`@en`, `@de`), seasonal content (@xmas), or UI modes (@dark). Each theme generates a dedicated rootNode, allowing for dynamic routing based on context.

#### How it works
For each rootNode a theme is applied, Routify creates an additional themed rootNode E.g. `routes.default-theme-dark.js`.

#### Setup
```javascript
{
    themes: {
        presets: {
            en: ['en'],
            en_gb: ['en-gb', 'en'], // fallback to US English
            de: ['de', 'en'],            
            en_xmas: [['en', 'xmas'], 'en'], // compound theme
            // Prefer US English Xmas over localized English without Xmas
            en_gb_xmas: [['en-gb', 'xmas'], ['en', 'xmas'], 'en-gb', 'en'],
            // Always prefer German
            de_xmas: [['de', 'xmas'], 'de', 'en']
        }
    }
}
```

##### Key Points in Setup

- **Themes are listed in order of preference**  
  `['en-gb', 'en']` ensures UK English routes take precedence over US English.

- **Themes can be compounded**  
  `[['en', 'xmas'], 'en']` prefers files matching both `en` and `xmas`, before falling back to `en`.

- **Files are only included if they satisfy a theme**  
  Routes must satisfy all themes in a compounded theme to be included.


#### File structure
```
src/routes/              # Root directory
├─ @_lang                # Underscored folders are Namespaces
│  ├─ @en                # English theme
│  │  ├─ @xmas           # Xmas-specific English theme
│  │  │  └─ index.svelte # Route for Xmas-specific English
│  │  └─ index.svelte    # General English route
│  └─ @de                # German theme
│     └─ index.svelte    # General German route
└─ index.svelte          # Default fallback route
```


#### Importing a Themed Route
```html
<script context="module">
    import { Router, createRouter } from '@roxi/routify';
    const theme = 'default-theme-en-xmas';
    const routes = await import(`../.routify/routes.${theme}.js`).then(m => m.default);
    const router = createRouter({ routes });
</script>

<Router {router} />
```


For more info, see [Themes API](/docs/api/themes).