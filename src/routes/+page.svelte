<script lang="ts">
    import Header from '$lib/header/Header.svelte';
    import Academia from '$lib/academia/Academia.svelte';
    import Industry from '$lib/industry/Industry.svelte';
</script>

<Header/>
<main>
    <section class="academia-card">
        <Academia/>
    </section>
    
    <section class="industry-card">
        <Industry/>
    </section>
</main>


<style>
    :global(*, *::before, *::after) {
        box-sizing: border-box;
    }

    :global(body, html) {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: var(--content-background-color);
    }

    main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        padding: 20px 40px;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
    }

    section {
        background: var(--surface-color);
        padding: 10px;
        padding-left: 20px;
        border-radius: 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        flex: 1;
        box-sizing: border-box;
    }

    .academia-card {
        background-color: var(--card1-background-color);
    }

    .industry-card {
        background-color: var(--card2-background-color);
    }

</style>

