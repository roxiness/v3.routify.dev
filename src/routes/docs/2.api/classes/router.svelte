<script>
    import ObjectApi from '#cmp/ObjectAPI.svelte'

    /**
     * @typedef {import("#cmp/ObjectAPI.svelte").ApiObject} ApiObject
     */

    /** @type { ApiObject } */
    const api = {
        instance: {
            type: 'Instance',
            default: 'Root Instance',
            text: 'The instance that this router belongs to.',
        },
        rootNode: {
            type: 'RNode',
            default: 'None',
            text: 'Manually specify the root node. By default the root node from the routes object will be used.',
        },
        name: {
            type: 'string',
            default: 'Empty string',
            text: 'The name of the router. All routers inside an instance must have unique names.',
        },
        routes: {
            type: 'RouteTree',
            default: 'none',
            text: 'The generated routes to be imported into the router.',
        },
        urlRewrite: {
            type: 'UrlRewrite',
            default: '',
            text: '',
        },
        urlReflector: {
            type: 'BaseReflector | AddressReflector | InternalReflector | LocalStorageReflector',
            default: 'AddressReflector',
            text: 'Keeps the internal path synchronized to the browser (AddressReflector) or the local storage (LocalStorageReflector). InternalReflector does not synchronize the internal path to anything.',
        },
        passthrough: {
            type: '',
            default: '',
            text: '',
            hide: true,
        },
        beforeRouterInit: {
            type: 'callback',
            default: '',
            text: '',
        },
        afterRouterInit: {
            type: 'callback',
            default: '',
            text: '',
        },
        beforeUrlChange: {
            type: 'callback',
            default: '',
            text: 'Runs before the route has been changed.',
        },
        afterUrlChange: {
            type: 'callback',
            default: '',
            text: 'Runs after the route has been changed.',
        },
        transformFragments: {
            type: '(RouteFragment[]) => RouteFragment[]',
            default: '',
            text: 'Manipulate the fragments returned by route.fragments',
        },
        onDestroy: {
            type: '(Router) => void',
            default: '',
            text: 'Called when the router is destroyed',
        },
        plugins: {
            type: 'Router Options',
            default: '',
            text: 'Plugins share the same options as the router options.',
        },
        queryHandler: {
            type: 'QueryHandler',
            default: '',
            text: 'Synchronizes the query parameters with the path in the address bar.',
        },
        clickHandler: {
            type: 'ClickHandler',
            default: '',
            text: 'Configures which clicks the router listens to.',
        },
        trailingSlash: {
            type: 'never | always | preserve | contextual',
            default: 'never',
            text: 'Whether or not to add a trailing slash to the URL. <code>preserve</code> will keep the trailing slash if it was there, and <code>contextual</code> will add a trailing slash if the URL is a directory, e.g.: <strong>/example/index.svelte.</strong>',
        }
    }

    /** @type { ApiObject }*/
    const urlRewriteApi = {
        toInternal: {
            type: '(url, ctx) => string',
            default: null,
            text: "Rewrites the external URL (visible in the address bar) before it's passed to the router.",
        },
        toExternal: {
            type: '(url, ctx) => string',
            default: null,
            text: "Rewrites the internal URL before it's passed to the router (visible in the address bar).",
        },
    }

    /** @type { ApiObject }*/
    const queryHandlerApi = {
        parse: {
            type: '(search:string, route:Route) => Object',
            default: '',
            text: 'Parses the query string from the path and returns an object with parameters.',
        },
        stringify: {
            type: '(params:Object, route:Route) => string',
            default: '',
            text: 'Serializes the parameters and returns a string.',
        },
    }

    /** @type { ApiObject }*/
    const clickHandlerApi = {
        elem: { 
            type: 'HTMLElement | () => HTMLElement',
            default: 'parent element of router',
            text: 'The element that will be listened to for clicks.'
        },
        callback: {
            type: '(event, url) => string | null',
            default: '',
            text: 'Can rewrite the url or ignore the click by returning null.'
        }
    }
</script>

<ObjectApi name="Router Options" fields={api} />

<hr />

<ObjectApi name="UrlRewrite" fields={urlRewriteApi} />

<hr />

<ObjectApi name="QueryHandler" fields={queryHandlerApi} />

<hr />

<ObjectApi name="ClickHandler" fields={clickHandlerApi} />
