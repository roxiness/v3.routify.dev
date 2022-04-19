<script>
    export let name
    export let fields
</script>

{#if name}
    <h4>
        <code>{name}</code>
    </h4>
{/if}

<p>
    <slot />
</p>

{#each Object.entries(fields) as [key, props]}
    <div>
        <strong>
            {key}:
        </strong>
        <code>
            {props.type}
        </code>
        {#if props.default}
            <small>(default: <code>{props.default}</code>)</small>
        {/if}
        {#if props.text}
            <p>{props.text}</p>
        {/if}
    </div>
{/each}
