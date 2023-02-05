<script>
    import { Router, router } from '../.routify/instance.default.js'    
    import { ScrollHandler } from '@roxi/routify/lib/runtime/plugins/ScrollHandler.js'

    const sh = new ScrollHandler(router)

    if (typeof document !== 'undefined')
        addEventListener('scroll', () => sh.onScrollThrottled(), { capture: true })
</script>

<Router {router} />
