<script>
    import ObjectApi from '#cmp/ObjectAPI.svelte'

    /**
     * @typedef {import("#cmp/ObjectAPI.svelte").ApiObject} ApiObject
     */

    /** @type { ApiObject } */
    const api = {
        instance: {
            type: 'RoutifyRuntime',
            default: 'GlobalInstance',
            text: 'Instance to use. Uses global instance by default.',
        },
        rootNode: {
            type: 'RNodeRuntime',
            default: 'undefined',
            text: 'The root node of the router.',
        },
        routes: {
            type: 'any',
            default: 'undefined',
            text: 'The routes tree.',
        },
        name: {
            type: 'string',
            default: 'undefined',
            text: 'Name of the router - leave blank if only one router is used.',
        },
        urlRewrite: {
            type: 'UrlRewrite|UrlRewrite[]',
            default: 'undefined',
            text: 'Hook: transforms paths to and from the router and browser.',
        },
        urlReflector: {
            type: "import('../lib/runtime/Router/urlReflectors/ReflectorBase.js')['BaseReflector']",
            default: 'Browser',
            text: 'Where to store the URL state - browser by default.',
        },
        url: {
            type: 'string',
            default: "'/'",
            text: 'Initial URL - "/" by default.',
        },
        passthrough: {
            type: 'Boolean|Router',
            default: 'false',
            text: 'Ignore clicks.',
        },
        beforeRouterInit: {
            type: 'MaybeArray<RouterInitCallback>',
            default: 'undefined',
            text: 'Hook: runs before each router initiation.',
        },
        afterRouterInit: {
            type: 'MaybeArray<RouterInitCallback>',
            default: 'undefined',
            text: 'Hook: runs after each router initiation.',
        },
        beforeUrlChange: {
            type: 'MaybeArray<BeforeUrlChangeCallback>',
            default: 'undefined',
            text: 'Hook: guard that runs before URL changes.',
        },
        afterUrlChange: {
            type: 'MaybeArray<AfterUrlChangeCallback>',
            default: 'undefined',
            text: 'Hook: runs after URL has changed.',
        },
        afterRouteRendered: {
            type: 'MaybeArray<AfterRouteRenderedCallback>',
            default: 'undefined',
            text: 'Hook: runs after a new route has been rendered.',
        },
        transformFragments: {
            type: 'MaybeArray<TransformFragmentsCallback>',
            default: 'undefined',
            text: 'Hook: transform route fragments after navigation.',
        },
        onMount: {
            type: 'MaybeArray<OnMountRouterCallback>',
            default: 'undefined',
            text: 'Hook: runs when the router is mounted.',
        },
        onDestroy: {
            type: 'MaybeArray<OnDestroyRouterCallback>',
            default: 'undefined',
            text: 'Hook: runs before the router is destroyed.',
        },
        queryHandler: {
            type: 'QueryHandler',
            default: 'undefined',
            text: 'Handles query parameter serialization and parsing.',
        },
        plugins: {
            type: 'Partial<RoutifyRuntimeOptions>[]',
            default: '[]',
            text: 'Plugins to extend or modify functionality.',
        },
        clickHandler: {
            type: 'ClickHandler',
            default: 'undefined',
            text: 'Handles click events for routing.',
        },
        anchor: {
            type: 'AnchorLocation',
            default: 'undefined',
            text: 'Where to place the anchor element.',
        },
    }
</script>


<ObjectApi name="Router Options" fields={api} />
