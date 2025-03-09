<script lang="ts">
    import Header from '$lib/ui/header/Header.svelte';
    import Academia from '$lib/ui/academia/Main.svelte';
    import Industry from '$lib/ui/industry/Main.svelte';
</script>

<Header/>
<main>
    <Academia/>
    <Industry/>
</main>


<style lang="scss">
    :root {
        --text-size-massive: 30px;
        --text-size-large: 20px;
        --text-size-medium: 18px;
        --text-size-small: 16px;

        --text-weight-bold: 500;
        --text-weight-normal: 400;

        /* Base font sizes for different screen sizes */
        --root-font-size-desktop: 18px;
        --root-font-size-tablet: 16px;
        --root-font-size-mobile: 14px;
    }

    :global(body, html) {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: var(--main-background);
        font-size: var(--root-font-size-desktop);

        /* Large screens */
        @media screen and (min-width: 1200px) {
            font-size: var(--root-font-size-desktop);
        }

        /* Tablet */
        @media screen and (max-width: 1199px) and (min-width: 768px) {
            font-size: var(--root-font-size-tablet);
        }

        /* Mobile */
        @media screen and (max-width: 767px) {
            font-size: var(--root-font-size-mobile);
        }
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
</style>
