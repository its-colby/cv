<script lang="ts">
    import Header from '$lib/ui/header/Header.svelte';
    import CV from '$lib/ui/CV.svelte';
</script>

<Header/>
<main>
    <CV/>
</main>

<style lang="scss">
    @use '$lib/theme/fonts.scss';
    @use '$lib/theme/screens.scss';

    :global(body, html) {
        margin: 0;
        padding: 0;
        background-color: var(--main-background);
        @extend %base-font;
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

        @include screens.tablet {
            flex-direction: column;
            padding: 20px;
        }

        @include screens.mobile {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }
</style>
