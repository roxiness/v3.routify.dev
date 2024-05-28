<script>
    import { createOverflowWatcher } from './scrollDetect'

    const { classStr, watch } = createOverflowWatcher()
</script>

<div class="content-wrapper {$classStr}">
    <div class="content" use:$watch>
        <slot />
    </div>
</div>

<style>
    /* wrapper */
    .content-wrapper {
        height: 100%;
        position: relative;
    }
    /* text */
    .content {
        inset: 0;
        position: absolute;
        overflow-y: auto;
    }

    /* shadow */
    .content-wrapper::before,
    .content-wrapper::after {
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
    /* shadow top */
    .content-wrapper.overflow-bottom::before {
        background: radial-gradient(
                farthest-side at 50% 100%,
                rgba(186, 186, 186, 0.5),
                rgba(0, 0, 0, 0)
            )
            0 100%;
    }
    /* shadow bottom */
    .content-wrapper.overflow-top::after {
        background:
            radial-gradient(
                farthest-side at 50% 0,
                rgba(186, 186, 186, 0.5),
                rgba(0, 0, 0, 0)
            ),
            0 100%;
    }
</style>
