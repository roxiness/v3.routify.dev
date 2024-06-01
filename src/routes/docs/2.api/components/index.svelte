<p>
    <strong
        >Experimental! Components may change or be moved to a separate package.</strong>
</p>

<p>Components are prefabricated parts that you can use or copy into your projects.</p>

<div class="prefab-component">
    <h4>Carousel</h4>
    <span class="import-path">@roxi/routify/components/Carousel.svelte</span>
    <p>
        The <code>Carousel</code> component displays inline pages and automatically synchronizes
        swipes and page changes.
    </p>
    <pre><code
            >&lt;script&gt;
  import Carousel from '@roxi/routify/components/Carousel.svelte';
&lt;/script&gt;

&lt;Carousel&gt;
  &lt;slot/&gt;
&lt;/Carousel&gt;</code></pre>

    <strong class="prefab-features">Features:</strong>
    <ul>
        <li>Supports touchscreen.</li>
        <li>Swiping to a page automatically sets it as the active page.</li>
        <li>Changing a page automatically scrolls the carousel to the new page.</li>
    </ul>
</div>

<div class="prefab-component">
    <h4>Nav</h4>
    <span class="import-path">@roxi/routify/components/Nav.svelte</span>
    <p>The <code>Nav</code> component provides a basic unstyled navigation. Feel free to style it as you wish.</p>
    <pre><code>&lt;script&gt;
  import Nav from '@roxi/routify/components/Nav.svelte';
&lt;/script&gt;

&lt;nav&gt;
  &lt;Nav /&gt;
&lt;/nav&gt;</code></pre>

    <strong class="prefab-features">Features:</strong>
    <ul>
        <li>Displays navigation links for the current node's children.</li>
        <li>Automatically sets the active class for the current page.</li>
        <li>Supports custom titles using <code>meta.title</code>.</li>
    </ul>
</div>


<div class="prefab-component">
    <h4>NavNested</h4>
    <span class="import-path">@roxi/routify/components/NavNested.svelte</span>
    <p>The <code>NavNested</code> component provides a basic unstyled nested navigation or sitemap. Feel free to style it as you wish.</p>
    <pre><code>&lt;script&gt;
  import NavNested from '@roxi/routify/components/NavNested.svelte';
&lt;/script&gt;

&lt;nav&gt;
  &lt;NavNested /&gt;
&lt;/nav&gt;</code></pre>

    <strong class="prefab-features">Features:</strong>
    <ul>
        <li>Displays nested navigation links for the current node's children.</li>
        <li>Automatically sets the active class for the current page.</li>
        <li>Supports custom titles using <code>meta.title</code>.</li>
        <li>Recursively renders child nodes up to a specified depth.</li>
    </ul>
</div>

<div class="prefab-component">
    <h4>ProgressBar</h4>
    <span class="import-path">@roxi/routify/components/ProgressBar.svelte</span>
    <p>The <code>ProgressBar</code> component displays a loading indicator when a route change is pending.</p>
    <pre><code>&lt;script&gt;
  import ProgressBar from '@roxi/routify/components/ProgressBar.svelte';
&lt;/script&gt;

&lt;ProgressBar /&gt;</code></pre>

    <strong class="prefab-features">Features:</strong>
    <ul>
        <li>Displays a progress bar when a route change is pending.</li>
    </ul>
</div>
