<script>
    import Nav from './__components/Nav.svelte'
</script>

<div class="features">
    <div class="tabs" data-routify-scroll-lock>
        <slot
            inline={{
                scrollIntoView: elem => (elem.parentNode.scrollLeft = elem.offsetLeft),
            }}
            anchor="wrapper" />
    </div>

    <Nav />
</div>

<style>
    .nav {
        width: 50%;
    }
    .features {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tabs {
        display: flex;
        overflow-x: hidden;
        /* flex-wrap: nowrap; */
        scroll-behavior: smooth;
        position: relative;
        /* z-index: 0; */
        width: 100%;
    }
    /* tabs */
    .tabs > :global(*) {
        display: grid;
        flex: 0 0 auto;
        width: 100%;
        /* padding: 0 16px; */
        position: relative;
    }
    /* video */
    .tabs :global(.video-container) {
        position: relative;
        padding-bottom: 63%;
        border-radius: 12px;
        overflow: hidden;
    }
    .tabs :global(.video-container > *) {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    /* composition */
    .tabs :global(.title) {
        font-weight: bold;
        grid-area: title;
        margin-bottom: 8px;
        margin-top: 32px;
    }
    .tabs :global(.media) {
        grid-area: media;
    }
    .tabs :global(.copy) {
        grid-area: copy;
    }
    .tabs > :global(*) {
        grid-template-areas:
            'media'
            'title'
            'copy';
        grid-template-rows: auto auto 1fr;
    }

    .tabs :global(.copy-wrapper.overflowing-bottom::before) {
        background: radial-gradient(
                farthest-side at 50% 100%,
                rgba(186, 186, 186, 0.5),
                rgba(0, 0, 0, 0)
            )
            0 100%;
    }
    .tabs :global(.copy-wrapper.overflowing-top::after) {
        background:
            radial-gradient(
                farthest-side at 50% 0,
                rgba(186, 186, 186, 0.5),
                rgba(0, 0, 0, 0)
            ),
            0 100%;
    }
    .tabs :global(.copy-wrapper::before),
    .tabs :global(.copy-wrapper::after) {
        content: '';
        position: absolute;
        z-index: 1;
        inset: 0;
        pointer-events: none;
        background-repeat: no-repeat !important;
        background-size:
            100% 10px,
            100% 10px !important;
    }
    :global(:where(.mobile, .tablet)) .tabs :global(.title) {
        margin: 24px 0 8px 0;
        font-size: 18px;
        font-weight: 900;
        letter-spacing: 0.02em;
    }
    .tabs :global(.copy) {
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
    }

    .tabs :global(.copy :last-child) {
        margin-bottom: 0;
    }

    /* mobile composition */
    :global(:where(.mobile, .tablet)) .tabs :global(.copy-wrapper) {
        height: 210px;
        position: relative;
    }

    /* desktop composition */
    :global(:where(.desktop)) .tabs :global(.copy-wrapper) {
        height: 100%;
        position: relative;
    }

    :global(:where(.desktop)) .tabs :global(.copy) {
        inset: 0;
        position: absolute;
    }

    :global(.desktop) .tabs > :global(*) {
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto 1fr;
        grid-template-areas:
            'title media'
            'copy media';
        gap: 16px;
    }
</style>
