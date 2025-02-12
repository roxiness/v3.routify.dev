<script>
    import Carousel from '@roxi/routify/components/Carousel.svelte'
    import Nav from './__components/Nav.svelte'
    import ShowOnIntersection from './__components/ShowOnIntersection.svelte'
    import './features.css'
</script>

<div class="routify-feature-box">
    <ShowOnIntersection>
        <Carousel class="features">
            <slot inline />
        </Carousel>
    </ShowOnIntersection>
    <Nav />
</div>
