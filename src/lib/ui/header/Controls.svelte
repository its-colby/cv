<script lang="ts">
    import ColorThemeToggle from '$lib/ui/utils/standard/ColorThemeToggle.svelte';
    import Nav from './nav/Container.svelte';
</script>

<div>
    <Nav />
    <ColorThemeToggle size={25}/>
</div>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        
        @include screens.mobile {
            margin-left: auto;
            gap: 0;
        }
    }
</style>