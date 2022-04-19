<script>
    import ObjectAPI from './ObjectAPI.svelte'
    export let name
    export let params = {}
</script>

<h4>
    <code>{name} ({Object.keys(params).join(', ')}) </code>
</h4>

<p>
    <slot />
</p>

{#each Object.entries(params) as [param, props]}
    <div>
        <strong>
            {param}:
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
        {#if props.object}
            <div class="object-api">
                <ObjectAPI {...props.object}>{props.object.text || ''}</ObjectAPI>
            </div>
        {/if}
    </div>
{/each}

<style>
    .object-api {
        padding-left: 1em;
    }
</style>
