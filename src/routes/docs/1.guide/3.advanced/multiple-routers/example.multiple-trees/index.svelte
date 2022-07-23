<script>
    /**
     * The following Routify config creates a
     * routes.exampleWidget.js for us.
     * {
     *   routesDir: {
     *     default: 'src/routes',
     *     exampleWidget: 'path/to/widget'
     *   }
     * }
     */
    import { Router } from '@roxi/routify'
    import routes from '../../../../../../../.routify/routes.exampleWidget.js'
</script>

<div class="routers">
    <div class="router">
        <Router name="multi1" {routes} />
    </div>
    <div class="router">
        <Router name="multi2" {routes} />
    </div>
</div>

<style>
    .routers {
        display: flex;
    }
    .router {
        flex: 1;
    }
</style>
