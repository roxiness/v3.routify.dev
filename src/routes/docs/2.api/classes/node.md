### API 
| prop | type | description | 
| ---- | ---- | ----------- | 
| meta | object | metadata of the node |
| children | node[] | Lists all children, ascending by `order`. To skip non-pages, use `children.indexed` |
| navigableChildren | node[] | List all children that can be visited. Eg. pages and modules |
| linkableChildren | node[] | List all navigableChildren that don't have `order` set to `false` |
| name | string | the name is part of the URL that belongs to the respective node |
| path | string | the path from the root to this node |
| traverse | function(path) | returns a relative node |
|**extended**|
| ancestors | node[] | Lists all ancestor nodes | 
| descendants | node[] | Lists all descendent nodes |
| instance | Instance | reference to the router's instance |
| level | number | distance to the root |
| root | node | reference to root node |
| isRoot | boolean | there are no nodes before this node |
