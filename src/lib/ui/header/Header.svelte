<script lang="ts">
    import Logo from './Logo.svelte';
    import ColorThemeToggle from '$lib/ui/utils/ColorThemeToggle.svelte';
    import { page } from '$app/stores';

    $: currentPath = $page.url.pathname;
</script>


<header>
    <div class="desktop">
        <Logo />
        <nav class="navigation">
            <a href="/home" class="nav-link" class:active={currentPath === '/home'}>Home</a>
            <a href="/cv" class="nav-link" class:active={currentPath === '/cv'}>CV</a>
            <a href="/gallery" class="nav-link" class:active={currentPath === '/gallery'}>Gallery</a>
            <a href="/blog" class="nav-link" class:active={currentPath === '/blog'}>Blog</a>
        </nav>
        <div class="controls">
            <ColorThemeToggle size={25}/>
        </div>
    </div>
    <div class="mobile">
        <div class="top">
            <Logo />
            <ColorThemeToggle size={25}/>
        </div>
        <nav class="mobile-navigation">
            <a href="/home" class="nav-link" class:active={currentPath === '/home'}>Home</a>
            <a href="/cv" class="nav-link" class:active={currentPath === '/cv'}>CV</a>
            <a href="/gallery" class="nav-link" class:active={currentPath === '/gallery'}>Gallery</a>
            <a href="/blog" class="nav-link" class:active={currentPath === '/blog'}>Blog</a>
        </nav>
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

    a {
        color: var(--text-neutral);
        text-decoration: none;
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

        .mobile-navigation {
            display: flex;
            gap: 1rem;
            width: 100%;
            justify-content: center;

            .nav-link {
                color: var(--text-secondary);
                text-decoration: none;
                font-weight: 500;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                transition: all 0.2s ease;
                flex: 1;
                text-align: center;

                &:hover {
                    color: var(--text-primary);
                    background-color: var(--hover-background);
                }

                &.active {
                    color: var(--accent-color);
                    background-color: var(--accent-background);
                }
            }
        }
    }
</style>