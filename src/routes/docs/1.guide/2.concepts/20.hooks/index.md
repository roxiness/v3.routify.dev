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

#### clickHandler
Filters click to the router.
 <!-- The hook is a an object with the following properties.
- `elem: HTMLElement`: Specifies an HTMLElement that the router will use for its `click/keydown` event listener. By default the value is the parent element.
- `callback: (event: KeyboardEvent|MouseEvent, href: String) => String | false`: Return false to ignore the click / keypress or return a href to be navigated to. -->

<!-- todo -->

---

### Examples

#### Simple loader / spinner example
Loader that uses beforeUrlChange and afterUrlChange
<Example path="../example.loader" title="Hooks"/>