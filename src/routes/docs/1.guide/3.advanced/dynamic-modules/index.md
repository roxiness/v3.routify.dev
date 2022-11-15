It is possible to remove, replace or prepend modules to another module or node.

```
routes/
├─ admin/
| ├─ dashboard/
| | ├─ _module.svelte
| | ├─ foo.svelte         #default behavior
| | ├─ bar@.svelte        #remove parent modules
| | ├─ baz@fun.svelte     #replace parent modules with _module-fun.svelte
| | ├─ qux@fun+.svelte    #prepend parent modules with _module-fun.svelte
| ├─ _module.svelte
| ├─ index.svelte
| _module.svelte
| _module-fun.svelte
| index.svelte
```

#### Default behavior
By default, Routify will render a page with all its parent modules. Eg. if we visit `/admin/dashboard/foo`,
Routify will render the following components recursively.

`_module.svelte` -> `admin/module.svelte` -> `admin/dashboard/_module.svelte` -> `admin/dashboard/foo.svelte`


#### Named modules
A named module, is a module that is prefixed with `-somename`. Eg. `_module-fun.svelte` in the example above.
Any module or page that descends from the same folder as a named module, will be able to use the  named module.

#### Removing parent modules
Removing parent modules can be done by using the meta option `<!-- routify:meta reset -->`
Alternatively, the file can be prepended with a `@`. Eg.  `bar@.svelte` in the example above.

If we visit the URL `/admin/dashboard/bar`, the rendered components would be `admin/dashboard/bar@svelte`


#### Replacing parent modules with a named module
Replacing a parent modules can be done by using the meta option `<!--routify:meta reset="<name of module>" -->`. Eg. `<!--routify:meta reset="fun" -->`.

Alternatively, the file can be prepended with `@<name of module>`. Eg. `baz@fun.svelte`.

If we visit the URL `/admin/dashboard/baz`,
the rendered components would be `_module-fun.svelte` -> `admin/dashboard/baz@fun.svelte`.


#### Prepending parent modules with a named module
Modules can prepended by using the meta option `<!--routify:meta reset="<name of module>+" -->`. Eg. `<!--routify:meta reset="fun+" -->`. Notice the `+`.

Alternatively, the file can be prepended with `@<name of module>+`. Eg. `qux@fun+.svelte`. Notice the `+`.

If we visit the URL `/admin/dashboard/qux`,
the rendered components would be 
`_module-fun.svelte` -> `_module.svelte` -> `admin/module.svelte` -> `admin/dashboard/_module.svelte` -> `admin/dashboard/foo.svelte`.

<!-- todo we should be able to use _module@global.svelte -->

#### Global module
To create a global module we can can create a `_module-global.svelte` in the root and then use it in `_module.svelte` by adding the comment `<!--routify:meta reset="global+" -->`.

<!-- we need to reset reset, because Routify will read the meta tags in the examples -->
<!-- routify:meta reset=null -->