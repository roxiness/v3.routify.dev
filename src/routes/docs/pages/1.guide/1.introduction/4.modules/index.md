
#### Formerly known as layouts

Modules are components that can control logic, layout and access for descendent components.

Modules are created as `_module.svelte`.

```html
<!-- _module.svelte -->

<slot>
  <!-- pages in this folder and subfolders
   will be rendered here -->
</slot>
<p>Copyright my website </p>
```

#### Disabling parent modules
Sometimes we may need to disable one or more parent modules. To do this we can use the `reset` meta helper.

##### Remove all parent modules
```
<!-- routify:meta reset -->
```

##### Remove the two nearest parent modules
```
<!-- routify:meta reset=2 -->
```