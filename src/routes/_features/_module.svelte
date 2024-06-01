<script>
    import Carousel from '@roxi/routify/components/Carousel.svelte'
    import Nav from './__components/Nav.svelte'
    import './features.css'
</script>

<div class="routify-feature-box">
    <Carousel class="features">
        <slot inline />
    </Carousel>
    <Nav />
</div>
