<script>
    import img from '../components/assets/Ilustration_V2_3d_design_modern_pink_1-PhotoRoom.png-PhotoRoom-cropped.png'

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
        <div class="image">
            <img src={img} alt="Hero image" />
        </div>
        <div class="body">
            <div class="content">
                <h1>The Router that Grows With You</h1>
                <h4>
                    Embrace a routing solution that evolves with your needs and
                    complexities.
                </h4>
                <button>Try the RC Now</button>
            </div>
        </div>
    </section>

    <!-- Features Overview -->
    <section class="features">
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
            Intrigued? Dive deeper into Routify 3's capabilities. Check out our detailed
            Features Page.
        </p>
        <button>Learn More</button>
    </section>

    <!-- What's New in Routify 3 -->
    <section id="whats-new">
        <h2>What's New in Routify 3</h2>
        <p>
            Rewritten from scratch, Routify 3 introduces a slew of new features and
            enhancements to elevate your development experience.
        </p>
        <ul>
            <li><strong>Multiple Routers</strong>: Manage complex UIs effortlessly.</li>
            <li>
                <strong>Inline Pages</strong>: Experience multiple pages on a single
                layout.
            </li>

            <li>
                <strong>Enhanced Metadata Management</strong>: Support for asynchronous
                buildtime data, can be cached to optimize development.
            </li>

            <li>
                <strong>Load Hooks</strong>: Run custom logic before a page loads to fetch
                data, handle redirects, or set HTTP status codes."
            </li>
            <li>
                <strong>State Management</strong>: State Management: Preserve routes and
                data effortlessly.
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
                <strong>Enhanced SSR & Prerendering</strong>: Now using Svelte's native
                SSR functionality.
            </li>
        </ul>
        <!-- Bulleted list or short paragraphs -->
    </section>

    <!-- Get Started Quickly -->
    <section id="get-started">
        <h2>Get Started</h2>
        <p>Initialize your Routify 3 project with a single command:</p>
        <pre><code>npm init routify@next</code></pre>
        <a href="/docs" class="cta-button">Read the Documentation</a>
    </section>

    <!-- Testimonials -->
    <section id="testimonials">
        <!-- Quotes -->
    </section>

    <!-- FAQ -->
    <section id="faq">
        <!-- Q&A -->
    </section>
</div>

<style>
    .landing-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        /* set max width and center */
        max-width: 1240px;
        margin: 0 auto;
        gap: 64px;
    }

    .landing-page > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        margin-top: 32px;
    }
    .landing-page > section > p {
        font-size: clamp(16px, 3vw, 21px);
    }

    h2 {
        font-size: clamp(36px, 8vw, 48px);
    }
    .hero {
        min-height: calc(100vh - 64px);
    }
    .hero h1 {
        font-size: clamp(21px, -1px + 6.6vw, 68px);
    }
    .hero h4 {
        font-size: clamp(16px, 2.8vw, 24px);
        line-height: 1.5;
    }

    .hero .body,
    .hero .body .content {
        /* align vertical center */
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: clamp(4px, 0.6vw, 8px);
    }
    .hero .body button {
        align-self: center;
        font-size: clamp(16px, 2vw, 18px);
        padding: clamp(4px, 0.6vw, 8px) clamp(16px, 1.8vw, 24px);
        height: auto;
    }

    @media (min-width: 720px) {
        .landing-page .hero {
            flex-direction: row-reverse;
            min-height: calc(70vh - 64px);
        }
        .hero .body {
            float: right;
            flex: 1;
            align-content: right;
        }
        .hero .body .content {
            align-self: flex-end;
            max-width: 480px;
        }
        .hero .image {
            flex: 1;
            display: flex;
            align-items: center;
        }
        .hero .body .content button {
            align-self: flex-end;
        }
    }

    .features {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
    }

    .features-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        width: 100%;
    }

    .feature {
        border: 1px solid #ccc;
        padding: 16px;
        text-align: center;
        flex: 0 1 calc(33.333% - 16px);
        /* make sure that the width stays the same on all .feature blocks */
        min-width: 200px;
        flex-grow: 1;
    }

    #whats-new {
        max-width: 720px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
