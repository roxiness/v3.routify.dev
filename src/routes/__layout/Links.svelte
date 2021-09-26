<script>
    import Icon from '#cmp/Icon.svelte'
    import {isActive} from '@roxi/routify'
</script>

<a href="/docs" class:active={$isActive('/docs')}>Docs</a>
<a href="/blog" class:active={$isActive('/blog')}>Blog</a>
<div class="spacer" />
<a href="https://github.com/roxiness/routify" class="icon">
    <Icon name="IconGithub" />
</a>
<a href="https://discord.gg/ntKJD5B" class="icon">
    <Icon name="IconDiscord" />
</a>
<a href="https://twitter.com/routifyjs" class="icon">
    <Icon name="IconTwitter" />
</a>


<style>
    .active { font-weight: bold}
</style>>