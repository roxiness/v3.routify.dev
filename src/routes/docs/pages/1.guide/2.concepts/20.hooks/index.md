<script>
    import Example from '#cmp/Example.svelte'
</script>

### Router hooks
Router hooks can be set with $ helpers ($afterUrl) or directly on the router ($router.afterUrl)


#### beforeRouterInit
Runs before each router initiation

#### afterRouterInit
Runs after each router initiation

#### beforeUrlChange
Guard that runs before url changes
<Example path="../example" title="Hooks"/>

#### afterUrlChange
Runs after url has changed


#### transformFragments
Transform route fragments after navigation

#### onDestroyRouter
Runs before router is destroyed

---

### Examples

#### Simple loader / spinner example
Loader that uses beforeUrlChange and afterUrlChange
<Example path="../example.loader" title="Hooks"/>