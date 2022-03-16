<script>
    export let context
    
    /* travel to parent node (folder),
       then things/cars */
    const carsNode = context.node.traverse('../things/cars')
    
    /* use a custom meta prop to filter */
    const carNodes = carsNode.children.filter(car => car.meta.available)
</script>

{#each carNodes as car}
    <svelte:component this={car.component} />
{/each}

