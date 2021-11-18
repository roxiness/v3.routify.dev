<script context="module">
    export const load = async () => {
        //simulate slow api
        await new Promise(resolve => setTimeout(resolve, 1500))
        return {
            props: {
                msg: await 'preloaded world',
            }
        }
    }
</script>

<script>
    export let msg
</script>


hello {msg}