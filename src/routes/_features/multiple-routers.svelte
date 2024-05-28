<!-- routify:meta order=2 -->
<!-- routify:meta isDefault -->

<script>
    import ScrollShadow from './__components/ScrollShadow.svelte'
</script>

<h3 class="title">Multiple Routers</h3>

<div class="media">
    <div class="video-container">
        <iframe
            src="https://www.youtube.com/embed/NKpZ9CvUNto"
            title="Routify - Visual Demo of Multiple Routers"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen />
    </div>
</div>
<div class="copy">
    <ScrollShadow>
        <p>
            Implement multiple routers within a single application for enhanced navigation
            control.
        </p>
        <p>
            Each router can have its own configuration, such as urlRewrite, plugins, and
            hooks.
        </p>
        <p>
            By default, routers that are on their default route, such as /index, remain
            hidden from the address bar.
        </p>
    </ScrollShadow>
</div>
