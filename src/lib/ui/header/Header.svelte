<script lang="ts">
    import Logo from './Logo.svelte';
    import ColorThemeToggle from '$lib/ui/utils/ColorThemeToggle.svelte';
    import { page } from '$app/state';

    $: currentPath = page.url.pathname;

    const navItems = [
        { href: '/home', label: 'Home' },
        { href: '/cv', label: 'CV' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/blog', label: 'Blog' }
    ];
</script>

{#snippet navLink(href: string, label: string, isMobile: boolean = false)}
    <a {href} class:active={currentPath === href} class:mobile={isMobile}>
        {label}
    </a>
{/snippet}

<header>
    <section class="desktop">
        <Logo />
        <div class="right-section">
            <nav>
                {#each navItems as item}
                    {@render navLink(item.href, item.label)}
                {/each}
            </nav>
            <ColorThemeToggle size={25}/>
        </div>
    </section>
    
    <section class="mobile">
        <div class="top">
            <Logo />
            <ColorThemeToggle size={25}/>
        </div>
        <nav>
            {#each navItems as item}
                {@render navLink(item.href, item.label, true)}
            {/each}
        </nav>
    </section>
</header>


<style lang="scss">
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/spacing.scss';
    @use '$lib/theme/fonts.scss';

    header {
        background-color: var(--header-background);
        padding: 0.5rem spacing.$indent;
        position: sticky;
        top: 0;
        z-index: 100;

        @include screens.mobile {
            position: relative;
        }
    }

    section.desktop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;

        @include screens.mobile {
            display: none;
        }

        .right-section {
            display: flex;
            align-items: center;
            gap: 2rem;

            nav {
                display: flex;
                gap: 1.5rem;
            }
        }
    }

    section.mobile {
        display: flex;
        flex-direction: column;
        gap: spacing.$indent;

        @include screens.desktop {
            display: none;
        }

        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        nav {
            display: flex;
            gap: 1rem;
            justify-content: center;
            width: 100%;
        }
    }

    a.active {
        color: var(--text-contrast);
        text-decoration: underline;
    }

    a:hover {
        color: var(--text-contrast);
    }

    a {
        font-size: var(--font-size-regular);
        color: var(--text-neutral);
        text-decoration: none;
        font-weight: var(--font-weight-bold);
        transition: all 0.2s ease;
    }
</style>