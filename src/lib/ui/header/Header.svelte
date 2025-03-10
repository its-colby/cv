<script lang="ts">
    import Logo from './Logo.svelte';
    import Nav from './nav/Container.svelte';
    import ColorThemeToggle from '$lib/ui/utils/standard/ColorThemeToggle.svelte';
</script>


<header>
    <div class="desktop">
        <Logo />
        <div class="controls">
            <Nav />
            <ColorThemeToggle size={25}/>
        </div>
    </div>
    <div class="mobile">
        <div class="top">
            <Logo />
            <ColorThemeToggle size={25}/>
        </div>
        <Nav />
    </div>
</header>


<style lang="scss">
    @use '$lib/theme/screens.scss';

    header {
        background-color: var(--header-background);
        padding: 0.5rem 1.5rem;
        top: 0;
        position: sticky;
        z-index: 100;

        @include screens.mobile {
            position: relative;
        }
    }

    .desktop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;

        @include screens.mobile {
            display: none;
        }

        .controls {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        }
    }

    .mobile {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        @include screens.desktop {
            display: none;
        }

        .top {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>