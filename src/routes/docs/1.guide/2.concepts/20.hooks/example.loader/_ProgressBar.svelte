<!-- A simple unoptimized progress bar -->

<script>
    let pct = 0
    setInterval(() => (pct += 5), 25)
</script>

<progress class="loading" value={pct} max="100" />

<style>
    .loading {
        position: absolute;
        top: -16px;
        width: 100%;
        left: 0;
    }
</style>
