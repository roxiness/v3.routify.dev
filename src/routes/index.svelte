<script>
    import img from '../components/assets/Ilustration_V2_3d_design_modern_pink_1.jpg'
    import { InternalReflector, Router, node } from '@roxi/routify'

    const featuresNode = $node.parent.children.find(node => node.name === '_features')

    const data = {
        features: [
            [
                'Performance',
                'Built for speed, with dynamic imports, customizable bundling and prefetching.',
            ],
            [
                'Flexibility',
                "Customize to your heart's content with plugins and declarative routing.",
            ],
            [
                'Developer Experience (DX)',
                'Easy route management through meta and file-based routing.',
            ],
            ['Preloads', 'Prefetch data and set guards effortlessly.'],
            [
                'Multiple Routers',
                'Integrate multiple router instances for complex UI structures.',
            ],
            [
                'Inline Pages',
                'Display multiple pages simultaneously on the same layout, enhancing user experience.',
            ],
            [
                'State Management',
                'Navigate through browser history while seamlessly restoring routes and their associated data.',
            ],
            [
                'SSR & Static Exports',
                'Deliver fully rendered pages for improved SEO and faster initial load.',
            ],
        ],
    }
</script>

<div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="image">
                <img src={img} alt="Hero image" />
            </div>
            <div class="body">
                <h1>The Router that Grows With You</h1>
                <h4>
                    Embrace a routing solution that evolves with your needs and
                    complexities.
                </h4>
                <a href="#get-started" target="self">
                    <button>Try the RC Now</button>
                </a>
            </div>
        </div>
    </section>

    <!-- Features Overview -->
    <section class="features">
        <div class="container">
            <h2>Features Overview</h2>
            <div class="features-wrap">
                {#each data.features as [title, description]}
                    <div class="feature">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                {/each}
            </div>

            <!-- CTA for more details -->
            <p>
                Intrigued? Dive deeper into Routify 3's capabilities. Check out our
                detailed Features Page.
            </p>
            <button>Learn More</button>
        </div>
    </section>

    <!-- Feature Preview -->
    <section class="feature-preview">
        <div class="container" data-routify-scroll-lock>
            <h2>Feature Previews</h2>
            <Router
                rootNode={featuresNode}
                name="feature"
                urlReflector={InternalReflector} />
        </div>
    </section>

    <!-- What's New in Routify 3 -->
    <section id="whats-new">
        <div class="container">
            <h2>What's New in Routify 3</h2>
            <p>
                Rewritten from scratch, Routify 3 introduces a slew of new features and
                enhancements to elevate your development experience.
            </p>
            <ul>
                <li>
                    <strong>Multiple Routers</strong>: Manage complex UIs effortlessly.
                </li>
                <li>
                    <strong>Inline Pages</strong>: Experience multiple pages on a single
                    layout.
                </li>
                <li>
                    <strong>Url Management</strong>: All routers can store their url in
                    the address bar, localStorage or memory.
                </li>
                <li>
                    <strong>Enhanced Metadata Management</strong>: Support for
                    asynchronous buildtime data, can be cached to optimize development.
                </li>

                <li>
                    <strong>Load Hooks</strong>: Run custom logic before a page loads to
                    fetch data, handle redirects, or set HTTP status codes."
                </li>
                <li>
                    <strong>State Management</strong>: State Management: Preserve routes
                    and data effortlessly.
                </li>

                <li>
                    <strong>Enhanced Scalability</strong>: Improved core architecture for
                    larger apps.
                </li>
                <li>
                    <strong>Flexible Plugins</strong>: Extend functionality without
                    compromises.
                </li>
                <li>
                    <strong>Enhanced SSR & Prerendering</strong>: Now using Svelte's
                    native SSR functionality.
                </li>
            </ul>
        </div>
        <!-- Bulleted list or short paragraphs -->
    </section>

    <!-- Get Started Quickly -->
    <section class="get-started" id="get-started">
        <div class="container">
            <div class="dialog">
                <h2>Get Started</h2>
                <p>Initialize your Routify 3 project with a single command:</p>
                <pre><code>npm init routify@next</code></pre>
                <a href="/docs" class="cta-button">Read the Documentation</a>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <!-- <section id="testimonials">
    </section> -->

    <!-- FAQ -->
    <!-- <section id="faq">
    </section> -->
</div>

<style>
    .landing-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: clamp(16px, 2vw, 20px);
    }

    .landing-page > section {
        padding: 128px 0;
        /* padding: 128px 16px; */
        width: 100%;
    }

    .landing-page > section .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
    .landing-page > section > p {
        font-size: clamp(16px, 3vw, 21px);
    }

    h2 {
        font-size: clamp(36px, 8vw, 48px);
    }
    .hero .container h1 {
        font-size: clamp(21px, -1px + 6.6vw, 76px);
        text-wrap: pretty;
        text-align: center;
    }
    .hero .container h4 {
        font-size: clamp(16px, 2.8vw, 24px);
        line-height: 1.5;
        text-align: center;
    }

    .hero .container .body {
        flex-direction: column;
        /* justify-content: center; */
        gap: clamp(4px, 0.6vw, 8px);
    }
    .hero .container .body button {
        align-self: center;
        font-size: clamp(16px, 2vw, 18px);
        padding: clamp(4px, 0.6vw, 8px) clamp(16px, 1.8vw, 24px);
        height: auto;
        margin-bottom: 64px;
    }
    .hero .container > * {
        flex: 2;
        display: flex;
        align-items: center;
    }
    .hero .container .body {
        flex: 3;
    }
    @media (min-width: 720px) {
        .landing-page .hero h1 {
            text-align: left;
        }
        .landing-page .hero .container {
            flex-direction: row-reverse;
            min-height: calc(90vh - 64px);
            padding: 32px 16px !important;
        }
        .hero .container h4 {
            text-align: left;
        }
        .hero .container .body a {
            align-self: flex-start;
        }
    }
    .feature-preview {
        gap: 32px;
    }

    .features {
        background: rgb(238, 174, 202);
        background: radial-gradient(
            circle,
            rgba(238, 174, 202, 1) 0%,
            rgba(148, 187, 233, 1) 100%
        );
    }
    .features .container h2 {
        font-size: clamp(36px, 8vw, 48px);
    }
    .features .container > p {
        font-size: clamp(16px, 3vw, 21px);
    }
    .features .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;

        gap: 32px;
    }

    .features-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
        width: 100%;
    }

    .feature {
        padding: clamp(16px, 2vw, 32px);
        text-align: center;
        flex: 0 1 calc(33.333% - 32px);
        min-width: min(46vw, 360px);
        flex-grow: 1;
        background: white;
    }
    .feature:hover {
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
    }

    #whats-new {
        /* box-shadow inner at top */
        box-shadow: inset 0 16px 16px -16px rgba(0, 0, 0, 0.2);

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }

    .get-started {
        background: #800080; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to right,
            #ffc0cb,
            #800080
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to right,
            #ffc0cb,
            #800080
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        max-width: 1240px;
    }
    .get-started .dialog {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px;
        color: white;
    }
    .get-started .dialog a {
        color: white;
        text-decoration: underline;
    }
</style>
