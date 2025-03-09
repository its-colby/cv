<script lang="ts">
    import Controls from './Controls.svelte';
    import Title from './Title.svelte';
    import Logo from './Logo.svelte';
</script>


<header>
    <Logo />
    <Title />
    <Controls />
</header>


<style lang="scss">
    @use '$lib/theme/screens.scss';

    header {
        background-color: var(--header-background);
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 40px;
        top: 0;
        position: sticky;
        z-index: 100;

        @include screens.mobile {
            position: relative;
        }
    }
</style>