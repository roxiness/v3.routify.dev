A Scroll Anchor is a reference point that defines where the content should scroll to when navigating to a specific node. Unlike traditional scroll positions that work only for the entire page, Scroll Anchors also work within scrollable areas like widgets or containers.

#### How to Use Scroll Anchors

Set a Scroll Anchor for a component or slot using the `anchor` attribute. You can use predefined strategies or define custom logic.

##### Predefined Anchors
Choose from these built-in strategies:
- `wrapper` – Wraps the component's element.
- `parent` – Uses the parent element.
- `header` – Inserts an anchor element before the component.
- `firstChild` – Uses the component's first child.

**Example:**
```svelte
<Router anchor="wrapper" />
```

#### Custom Anchors
For more flexibility, pass a function to the anchor attribute to specify a custom scroll target.

**Example:**
```svelte
<slot anchor={elem => elem.parentElement} />
```

<br />

In addition, the predefined `anchor="parent"` strategy works seamlessly with [decorators](/docs/guide/advanced/decorators), making it easy to manage scroll behavior for nested components or styled containers. For instance, if a parent element is styled or decorated (e.g., with borders or padding), the parent anchor ensures the component scrolls into focus relative to that decorated element.