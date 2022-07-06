<script context="module">
    export const load = async () => {
        //fetch props before the component gets loaded        
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