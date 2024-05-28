<!-- routify:meta order=2 -->
<!-- routify:meta isDefault -->

<script>
    import ScrollShadow from './__components/ScrollShadow.svelte'
</script>

<h3 class="title">URL Management</h3>

<div class="media">
    <div class="video-container">
        <img src="/assets/url-management.jpg" alt="" />
    </div>
</div>
<div class="copy">
    <ScrollShadow>
        <p>
            Leverage <code>urlRewrite</code> for unmatched flexibility in managing hash-navigation,
            basepaths, translations and much more.
        </p>
        <p>Urls can be stored in</p>
        <ul class="condensed">
            <li>
                <code>Address:</code> Stores the url in the address bar for sharing, editing,
                and bookmarking.
            </li>
            <li>
                <code>localStorage:</code> Remember the current URL across sessions.
            </li>
            <li>
                <code>internal:</code> Keep the URL in session memory.
            </li>
        </ul>
    </ScrollShadow>
</div>
