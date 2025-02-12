<script>
    let isInView
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) isInView = true
        })
    })
</script>

<div use:observer.observe>
    {#if isInView}
        <slot />
    {/if}
</div>
