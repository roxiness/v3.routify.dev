<script>
    import { goto } from '@roxi/routify'
    if (!import.meta.env.SSR)
        setTimeout(() => {
            $goto('/docs')
        }, 5000)
</script>

<div class="container">
    <img alt="Routify" class="brand" src="/assets/routify3.svg" width="600" />
    <h1>Work in Progress</h1>
    Forwarding to <a href="/docs">DOCS</a>...
</div>

<style>
    .container {
        margin-top: 10rem;
        text-align: center;
    }
</style>
