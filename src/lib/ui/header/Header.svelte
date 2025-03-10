<script lang="ts">
    import Controls from './Controls.svelte';
    import Logo from './Logo.svelte';
</script>


<header>
    <Logo />
    <Controls />
</header>


<style lang="scss">
    @use '$lib/theme/screens.scss';

    header {
        background-color: var(--header-background);
        padding: 0.5rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        top: 0;
        position: sticky;
        z-index: 100;

        @include screens.mobile {
            position: relative;
        }
    }
</style>