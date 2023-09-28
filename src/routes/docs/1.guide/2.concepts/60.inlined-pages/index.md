<script>
    import Example from '#cmp/Example.svelte'
</script>
<Example path="../example" title="Inline Example "/>

The Inline feature provides a versatile way to render and manage multiple pages simultaneously. This feature enables the creation of complex, dynamic layouts and enhances the user experience by offering seamless navigation.

Inline pages are visible whenever their parent module is visible and no non-inline sibling page is active. This means that when the parent module is in view and there isn't a non-inlined page being actively displayed, all immediate inline children will be rendered.

| Option         | Type                                         | Description                                                  |
| -------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `isInline`     | `(node: RNodeRuntime, context: RenderContext) => boolean` | Callback that determines if a child node should be inlined.  |
| `shouldScroll` | `InlineCallback<boolean>`                    | Callback that decides if the child node should scroll into view when it becomes the active route. |
| `scrollIntoView` | `(elem: HTMLElement, instant: boolean) => void` | Callback that allows custom behavior for scrolling into view. |
| `context`      | `'browser' &vert; 'ssr' &vert; 'always'`             | Determines when an inlined page should be rendered.          |
| `params`       | `Object<string, string[]>`                   | Used to create multiple instances of inlined pages for parameterized nodes. |
| `recursive`    | `boolean`                                    | Controls whether decorators are applied recursively.         |


