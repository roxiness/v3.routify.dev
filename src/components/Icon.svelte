<script>
    import * as icons from './icons/index.js'
    export let name
</script>

<span>
    {@html icons[name]}
</span>

<style>
    span {
        line-height: 0;
    }
</style>
