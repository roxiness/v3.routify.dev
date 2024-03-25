<script>
    export let fill = '#555'
    export let secondaryFill = 'none'
    export let width = '18px'
    export let height = '18px'
    export let icon = 'home'
    export let viewBox = '0 0 24 24'
    export let xmlns = 'http://www.w3.org/2000/svg'
</script>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} {fill} {width} {height}>
    {#if icon === 'home'}
        <path d="M0 0h24v24H0z" fill={secondaryFill} />
        <path d="M12 2L2 12h3v8h6v-6h4v6h6v-8h3L12 2z" />
    {:else if icon === 'forward'}
        <path d="M0 0h24v24H0z" fill={secondaryFill} />
        <path d="M4 13h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4z" />
    {:else if icon === 'back'}
        <path d="M0 0h24v24H0z" fill={secondaryFill} />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    {/if}
</svg>
