<script context="module">
    const sleep = time => new Promise(resolve => setTimeout(resolve, time))

    // simulate a slow loading page
    export const load = () => sleep(500)
</script>

#### Slow Page