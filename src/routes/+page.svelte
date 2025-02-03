<script lang="ts">
    import Header from '$lib/ui/Header.svelte';
    import { section } from '$lib/ui/Sections.svelte'
    // iphone - 844 × 390 - ipad - 1080 x 810
</script>

<Header/>
<main>
    <section id="academia">
        {@render section(true)}
    </section>

    <section id="industry">
        {@render section(false)}
    </section>
</main>


<style>
    :root {
        --text-size-massive: 30px;
        --text-size-large: 20px;
        --text-size-medium: 18px;
        --text-size-small: 16px;

        --text-weight-bold: 500;
        --text-weight-normal: 400;
    }

    :global(body, html) {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: var(--main-background);
    }

    main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-sizing: border-box;

        gap: 20px;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 100%;
        margin: 0;

        @media (max-width: 800px) {
            flex-direction: column;
            padding: 20px;
        }
    }

    section {
        flex: 1;
        box-sizing: border-box; 
                
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        
        border-radius: 12px;
    }

    section#academia {
        background-color: var(--card-a-background);
    }

    section#industry {
        background-color: var(--card-a-background);
    }

</style>
