<!-- routify:meta order=3 -->

<script>
    import ScrollDetectBox from './__components/ScrollDetectBox.svelte'
</script>

<h3 class="title">Inline Pages</h3>

<div class="media">
    <div class="video-container">
        <iframe
            src="https://www.youtube.com/embed/iVrE3Xpbgtw"
            title="Routify - Visual Demo of Multiple Routers"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen />
    </div>
</div>
<ScrollDetectBox className="copy">
    <p>
        When an active page is <code>inlined</code>, Routify will also show the sibling
        pages that are inlined.
    </p>
    <p>
        Any page or module can be inlined by setting <code>meta.inline</code> to true. When
        navigating between inlined pages, the page will scroll to the new page. This is useful
        for landing pages, tabbed sections, wizards, etc.
    </p>
</ScrollDetectBox>
