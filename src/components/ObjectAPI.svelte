<script context="module">
    /**
     * @typedef {boolean | number | string | object} type
     * @typedef {Object<string, {type: any, default: string, text: string, hide?: boolean}>} ApiObject
     */
</script>

<script>
    export let name
    /** @type {ApiObject} */
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
    {#if !props.hide}
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
                <p>{@html props.text}</p>
            {/if}
        </div>
    {/if}
{/each}
