<script>
    import { afterUrlChange, beforeUrlChange } from '@roxi/routify'
    let msg = null
    let allowNavigation = false

    $beforeUrlChange(() => allowNavigation)
    $afterUrlChange(({ route }) => (msg = `went to ${route.url}`))
</script>

<a href="/">home</a>
<a href="/foo">foo</a>
<a href="/bar">bar</a>

<slot />

<label>
    <input type="checkbox" bind:checked={allowNavigation} />
    Allow navigation
</label>

<br />
{msg || 'check the box to navigate'}
