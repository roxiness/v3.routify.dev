<!-- routify:meta _date="2023-12-22T17:07:37.814Z" -->
<!-- routify:meta _author="Jakob Rosenberg" -->
<!-- routify:meta _author_description="Author of Routify" -->
<!-- routify:meta _author_github="https://github.com/jakobrosenberg" -->
<!-- routify:meta _author_twitter="https://twitter.com/jakob_rosenberg" -->
<!-- routify:meta _author_img="/assets/collaborators/jakobrosenberg.jpg" -->
<!-- routify:meta _description="It’s been a long time coming and the Routify 3 RC is finally here." -->

<!-- routify:meta title="Routify 3: Your Project, Your Rules" -->

It's been a long time coming and the Routify 3 RC is finally here. Routify 3 is envisioned not just as a tool, but as a canvas that offers the freedom to orchestrate components to your specific needs. It introduces features such as multiple routers, internal memory routing, and lots of hooks, each designed to provide you with the means to customize and adapt as your projects require.
<br />

## Key Features of Routify 3

### Multiple Routers
Embed independent routers within individual components, such as split-views, tabbed interfaces, widgets, carousels, or wizards. Thanks to Routify's file-based routing logic, each component can be built using the same consistent development process throughout.

With Multiple Routers, each component can possess its own routing logic and configuration. This modularity not only simplifies the development process but also ensures that each part of your application can function autonomously, leading to cleaner code and easier maintenance.

<div class="video-container">
    <iframe
        src="https://www.youtube.com/embed/NKpZ9CvUNto"
        title="Routify - Visual Demo of Multiple Routers"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen />
</div>

<br />
<br />

### URL Management
Routify 3's URL Management system stands out for its versatility, offering different strategies for handling and displaying URLs within each router in your application.

#### Flexible URL Handling: Address Bar, Memory, and localStorage
- **Address Bar**: Traditional URL display in the address bar, suitable for shareable and bookmarkable URLs.
- **Memory**: An option to keep URLs within the app's internal state, ideal for SPAs or desktop applications like Electron, where visible browser history is not necessary.
- **localStorage**: Storing URLs in localStorage allows for preserving the user's navigation state across sessions, enhancing user experience in long-lived applications.

#### `urlRewrites`: Beyond Standard Framework Limitations
In Routify 3, `urlRewrite` empowers developers to go beyond hardcoded framework options, offering the freedom to create bespoke logic for critical features like i18n, hash-based navigation, and dynamic basepaths. This added flexibility facilitates custom URL structures that adapt perfectly to the unique demands of your project.

<div class="media">
    <div class="video-container">
        <img src="/assets/url-management.jpg" alt="" />
    </div>
</div>

<br />
<br />

### Enhanced Navigation with Inline Pages

Routify 3 introduces an option to display multiple pages in the same layout. See the example below.

```
promotion/
    intro.svelte      #inlined
    features.svelte   #inlined
    contact.svelte
    _module.svelte
```

<br />

**Scroll vs Replace:** When pages like `intro.svelte` and `features.svelte` are marked as inlined within the same folder (`promotion`), Routify changes the navigation behavior. Instead of replacing the content in the view, it automatically scrolls between these inlined pages.

**Seamless User Experience:** This scrolling mechanism creates a seamless transition between the `intro` and `features` sections, enhancing the user’s journey through a smooth, cohesive narrative. The same approach can also be used for tabbed views, wizards, carousels, etc.

**Standard Navigation for Non-Inlined Pages:** For pages not marked as inlined, such as contact.svelte, Routify follows traditional navigation by replacing the current view with the new page, typical for standalone sections.

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

<br />
<br />

#### History Management
Routify 3's **History Management** ensures a smooth user journey through browser history. The framework can cache the route and its data upon visit, allowing for instant retrieval when revisiting through the browser's back or forward buttons.

<div class="media">
    <div class="video-container">
        <iframe
            src="https://www.youtube.com/embed/LVrPtjkfMvs"
            title="Routify - Visual Demo of Multiple Routers"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen />
    </div>
</div>

<br />
<br />

### Preloads
In Routify 3 we introduce the `load` hook, which runs before a route is loaded. This hook can be used to hydrate data, redirect the user and return SSR HTML codes, such as 404.


<div class="media">
    <div class="video-container">
        <iframe
            src="https://www.youtube.com/embed/bPk74R6yIsk"
            title="Routify - Visual Demo of Multiple Routers"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen />
    </div>
</div>

<br />
<br />


## Performance and Scalability

With Routify 3, we've placed a strong emphasis on scalability. Especially UX scalability. Routify 3 stands out for its ability to adapt to diverse project requirements. It offers a level of freedom that encourages innovation and creative problem-solving, perfect for projects that break the mold or push boundaries.


## Looking Ahead: More on Routify 3
The release of the Routify 3 RC is just the beginning. We are excited to bring you a series of upcoming updates that will delve deeper into the powerful capabilities of Routify 3. Don't hesitate to reach out on [Twitter](https://twitter.com/routifyjs) or [Discord](https://discord.gg/ntKJD5B) if there's something you'd like us to cover.

### Upcoming Content and Resources
- **In-Depth Feature Exploration:** Detailed articles focusing on individual features of Routify 3, explaining their usage and benefits.
- **Practical Examples:** Real-world examples and case studies that demonstrate how Routify 3 can be utilized effectively in various scenarios.
- **Tips and Tricks:** Helpful tips and tricks to enhance your development process using Routify 3, making your work more efficient and enjoyable.
Community Contributions: Spotlights on how the community is using and evolving Routify 3, showcasing innovative implementations and solutions.


### Documentation and bug fixes
We've come along way, but there's still stuff to do. If you come across a bug or notice missing documentation, please let us know, as we prioritize issues based on user feedback.

### Stay Tuned
- **Subscribe and Follow:** Stay updated by following our social media channels.
- **Join the Conversation:** Participate in our community forums or on GitHub to share your experiences, ask questions, and collaborate with other Routify 3 users.
We are committed to making Routify 3 an ever-evolving tool, shaped by real-world use and community feedback. Keep an eye out for these updates and join us in exploring the full potential of Routify 3 in web development.


## Thank You!

As we launch this RC, we extend a big thank you to the community. Whether you were part of the journey or  you're about to try Routify for the first time, we wouldn't have made it this far without your interest and support. ❤️