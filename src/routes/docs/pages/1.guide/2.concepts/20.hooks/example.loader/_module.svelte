<script>
    import { afterUrlChange, beforeUrlChange } from '@roxi/routify'
    import ProgressBar from './_ProgressBar.svelte'

    let showSpinner = false

    $beforeUrlChange(() => (showSpinner = true))
    $afterUrlChange(() => (showSpinner = false))
</script>

<a href="/">home</a>
<a href="/slow-page">slow page</a>

<slot />

{#if showSpinner}
    <ProgressBar />
{/if}
