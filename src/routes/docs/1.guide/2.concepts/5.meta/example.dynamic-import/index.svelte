<script>
    import { meta } from '@roxi/routify'
    let movieData = { status: 'click a movie' }
    const handleClick = async movie => {
        movieData = await movie.fetchMyData()
    }
</script>

<h4>Dynamic import of meta</h4>

{#each $meta.movies as movie}
    <button on:click={() => handleClick(movie)}>
        {movie.title}
    </button>
{/each}

<h4>Movie data</h4>
<p><strong>Hint:</strong> Open the network tab in your developer tools to confirm that each data entry is dynamically loaded on request</p>
<pre>
    {JSON.stringify(movieData, null, 2)}
</pre>
