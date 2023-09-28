<nav>
    <a href="/about-me">About Me</a>
    <a href="/contact-me">Contact Me</a>
    <a href="/my-work">My Work</a>
</nav>

<main>
    <slot />
</main>

<style>
    main {
        height: 400px;
        overflow-y: auto;
        scroll-behavior: smooth;
    }
    a {
        margin-right: 2rem;
    }
</style>
