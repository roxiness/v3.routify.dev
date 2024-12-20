<script>
    import ObjectAPI from '#cmp/ObjectAPI.svelte';

    const themesConfig = {
        presets: {
            type: 'object',
            default: '{}',
            text: 'Defines individual themes and their fallback hierarchies. Each preset can be a simple array or a detailed object.',
        },
        defaults: {
            type: 'object',
            default: '{namespace: [/^@_/], rootNodes: ["*"], file: "en", app: "en"}',
            text: 'Global defaults applied to all themes, simplifying preset configurations. Includes <code>file</code>, <code>app</code>, <code>namespaces</code>, and <code>rootNodes</code>.',
        },
    };

    const themesDefaults = {
        file: {
            type: 'string',
            default: '"en"',
            text: 'Default fallback theme for unmatched files.',
        },
        app: {
            type: 'string',
            default: '"en"',
            text: 'Default app-wide theme.',
        },
        namespaces: {
            type: 'array',
            default: '[/^@_/]',
            text: 'Folders ignored as themes. Supports regex patterns.',
        },
        rootNodes: {
            type: 'array',
            default: '["*"]',
            text: 'Default root nodes applied to all presets.',
        },
    };

    const themePreset = {
        preferences: {
            type: 'array',
            default: '[]',
            text: 'Ordered list of theme preferences. Compound themes can be defined as nested arrays.',
        },
        rootNodes: {
            type: 'array',
            default: '[]',
            text: 'Specifies the root nodes for this preset.',
        },
    };
</script>

<ObjectAPI name="themes" fields={themesConfig}>
    The top-level <code>themes</code> configuration, which includes <code>presets</code> and <code>defaults</code> for managing themes globally and individually.
</ObjectAPI>

<ObjectAPI name="themes.defaults" fields={themesDefaults}>
    Defines global defaults for themes to simplify configuration.
</ObjectAPI>

<ObjectAPI name="themePreset" fields={themePreset}>
    Represents an individual theme preset. Can be configured as a simple array or a detailed object for fine-grained control.
</ObjectAPI>
