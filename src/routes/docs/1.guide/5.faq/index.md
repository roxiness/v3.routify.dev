#### Can I use hashbased navigation?
Yes, hashbased navigation can be added by creating a URL rewrite.
```javascript
urlRewrite: {
    toExternal: url => `#${url}`, // prepend URLs with #
    toInternal: url => url.replace(/^.+#/, ''), // remove leading #
}    
```

#### How do I host on Github Pages
See *Can I use hashbased navigation*