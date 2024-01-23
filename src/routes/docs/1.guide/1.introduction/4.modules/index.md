
#### Formerly known as layouts

Modules are nodes that can control logic, layout and access for descendent nodes.

Modules are created as `_module.svelte`.

```html
<!-- _module.svelte -->

<slot>
  <!-- pages in this folder and subfolders
   will be rendered here -->
</slot>
<p>Copyright my website </p>
```

#### Passing props
Props can be passed to child modules and pages with `props`:

```html
<slot props={{myMsg: 'Hello World!'}}` />
```

##### Consuming props
Props can be consumed in all descendent nodes.


```javascript
// Child node
export let myMsg

console.log(myMsg)
```


```javascript
// Descendent node

/** @type {RoutifyContext} */    
export let context

console.log(context.allProps.myMsg)
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

<!-- undo whatever the html parser picks up in the code block above -->
<!-- routify:meta reset=false -->