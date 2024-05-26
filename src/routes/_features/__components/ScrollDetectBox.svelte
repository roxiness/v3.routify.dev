<script>
    import { onDestroy, onMount } from 'svelte'
    export let className = ''
    export let style = ''

    let wrapperElement
    let isOverflowingLeft = false
    let isOverflowingTop = false
    let isOverflowingRight = false
    let isOverflowingBottom = false

    const checkOverflow = () => {
        if(!wrapperElement) return

        // Checking horizontal overflow
        isOverflowingLeft = wrapperElement.scrollLeft > 0
        isOverflowingRight =
            wrapperElement.scrollWidth - 1 >
            wrapperElement.clientWidth + wrapperElement.scrollLeft

        // Checking vertical overflow
        isOverflowingTop = wrapperElement.scrollTop > 0

        isOverflowingBottom =
            wrapperElement.scrollHeight - 1 >
            wrapperElement.clientHeight + wrapperElement.scrollTop
    }

    const handleScroll = () => {
        checkOverflow()
    }

    onMount(() => {
        wrapperElement.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)
        handleScroll() // Initial check
    })

    onDestroy(() => {
        wrapperElement.removeEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)
    })
</script>

<div
    class="{className}-wrapper"
    class:overflowing-left={isOverflowingLeft}
    class:overflowing-top={isOverflowingTop}
    class:overflowing-right={isOverflowingRight}
    class:overflowing-bottom={isOverflowingBottom}>
    <div class={className} bind:this={wrapperElement}>
        <slot />
    </div>
</div>
