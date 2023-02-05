Decorators are Svelte components that wrap around each descending module and page.

#### Applying Decorators
Decorators can be applied in any of the following ways.

##### The router object
```javascript
import { createRouter } from '@roxi/routify'
const router = createRouter({decorator: MyDecorator, ...})
```

##### The router component
```html
<Router decorator={MyDecorator} ...>
```

##### The slot
```html
<slot decorator={MyDecorator} ...>
```

##### The file structure
```
_decorator.svelte
_module.svelte
index.svelte
```

#### Decorator Inheritance

The examples above are shorthand for
```javascript
decorator = (parentDecorators) => ([...parentDecorators, MyDecorator])
```

To avoid inheritance you can simply omit the parent decorators
```javascript
decorator = () => ([MyDecorator])
```
