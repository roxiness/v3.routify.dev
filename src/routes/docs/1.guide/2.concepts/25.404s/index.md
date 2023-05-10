<script>
    import Example from '#cmp/Example.svelte'
</script>

#### Setting Up Custom 404 Pages in Routify
A 404 page is displayed when a user navigates to a URL that doesn't exist in your application. To handle these situations, Routify allows you to set up catch-all routes at any level of your site hierarchy.

##### Creating a Catch-all Route:
1. **Define the Route:** Create a Svelte component in your routes directory named **`[...anyname].svelte`**. This acts as your catch-all route. The **`anyname`** can be anything of your choosing.
2. **Design the Page:** Fill the component with whatever you want to show when an unhandled route is accessed.
Test: Navigate to an undefined route within the catch-all's directory to verify it's working.
3. **How it Works:**
Catch-all routes (**`[...anyname].svelte`**) in a specific directory will handle any unhandled routes within that directory's path. This allows you to create unique 404 pages for different sections of your site.
For instance, if you place **`[...fallback].svelte`** in the **`blog/posts/`** directory, it handles any unhandled route starting with **`/blog/posts/`**. This allows for a more tailored user experience in the event of a 404 error.
Remember to always test your catch-all routes to ensure they're functioning as expected.

<Example path="../example" title="404 Example " focus="index.svelte"/>

