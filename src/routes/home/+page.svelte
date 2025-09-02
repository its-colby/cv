<script lang="ts">
    import Header from '$lib/ui/header/Header.svelte';
</script>

<Header/>
<main>
    <div class="home-content">
        <section class="hero">
            <h1>Welcome</h1>
            <p class="intro">
                This is the home page of my personal website. Navigate through the sections to explore my CV and gallery.
            </p>
        </section>
        
        <section class="quick-links">
            <h2>Quick Links</h2>
            <div class="links-grid">
                <a href="/cv" class="link-card">
                    <h3>CV</h3>
                    <p>View my professional experience, education, and achievements</p>
                </a>
                <a href="/gallery" class="link-card">
                    <h3>Gallery</h3>
                    <p>Explore my projects and creative work</p>
                </a>
            </div>
        </section>
    </div>
</main>

<style lang="scss">
    @use '$lib/theme/fonts.scss';
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/spacing.scss';

    :global(body, html) {
        margin: 0;
        padding: 0;
        background-color: var(--main-background);
        @extend %base-font;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 40px;
        width: 100%;
        min-height: calc(100vh - 4rem);

        @include screens.tablet {
            padding: 20px;
        }
    }

    .home-content {
        max-width: 800px;
        width: 100%;
    }

    .hero {
        text-align: center;
        margin-bottom: 3rem;

        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
            
            @include screens.mobile {
                font-size: 2rem;
            }
        }

        .intro {
            font-size: 1.2rem;
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 0;
        }
    }

    .quick-links {
        h2 {
            color: var(--text-primary);
            margin-bottom: 2rem;
            text-align: center;
        }

        .links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;

            @include screens.mobile {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
        }

        .link-card {
            background-color: var(--card-background);
            border-radius: 8px;
            padding: 2rem;
            text-decoration: none;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border: 1px solid var(--border-color);

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }

            h3 {
                color: var(--text-primary);
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
            }

            p {
                color: var(--text-secondary);
                margin: 0;
                line-height: 1.5;
            }
        }
    }
</style>
