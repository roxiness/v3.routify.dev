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

#### Can I enable verbose logging
Yes, to enable verbose logging in Routify, open your browser console and enter `__routify.log.level = 4`

**Note**: Make sure that your browser doesn't filter verbose logging.
<details>
<summary>Example
</summary>
<img src="/assets/console-logging.webp" />
</details>

#### How do I get rid of wrapper elements
You can disable the creation of wrapper elements by setting the `anchor` option to `parent`, `header` or `header`. For more information see [Scroll Anchors](/docs/guide/advanced/scroll-anchors).