<script lang="ts">
    import Header from '$lib/ui/header/Header.svelte';
</script>

<Header/>
<main>
    <article>
        <header>
            <h1>About Me</h1>
        </header>
        
        <section>
            <p>
                Welcome to my personal website. I'm passionate about technology, research, and continuous learning. 
                This space serves as a window into my professional journey, academic pursuits, and creative endeavors.
            </p>
            
            <p>
                Throughout my career, I've been driven by curiosity and the desire to solve complex problems. 
                Whether working in industry roles, conducting research, or teaching, I strive to make meaningful 
                contributions while constantly expanding my knowledge and skills.
            </p>
            
            <p>
                My background spans multiple domains, allowing me to bring diverse perspectives to every project. 
                I believe in the power of interdisciplinary collaboration and the importance of bridging theory 
                with practical application.
            </p>
            
            <p>
                When I'm not immersed in professional work, I enjoy exploring new technologies, contributing to 
                open-source projects, and sharing knowledge with the community. I'm always eager to connect with 
                like-minded individuals and discuss innovative ideas.
            </p>
            
            <p>
                Feel free to explore my CV to learn more about my professional experience and educational background, 
                or check out the gallery to see some of my projects and creative work. I'm always open to new 
                opportunities and meaningful conversations.
            </p>
        </section>
    </article>
</main>

<style lang="scss">
    @use '$lib/theme/fonts.scss';
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/spacing.scss';
    @use "sass:map";

    :global(body, html) {
        margin: 0;
        padding: 0;
        background-color: var(--main-background);
        @extend %base-font;
    }

    main {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: 2rem spacing.$indent;
        min-height: calc(100vh - 4rem);

        @include screens.mobile {
            padding: spacing.$indent;
        }
    }

    article {
        max-width: 45rem;
        width: 100%;
        background-color: var(--card-a-background);
        border-radius: 0.66rem;
        padding: 2rem spacing.$indent;
        
        @include screens.mobile {
            padding: spacing.$indent;
        }

        header {
            margin-bottom: 2rem;
            text-align: center;

            h1 {
                font-size: var(--font-size-large);
                font-weight: var(--font-weight-bold);
                color: var(--text-brand);
                margin: 0;
                
                @include screens.mobile {
                    font-size: var(--font-size-kinda-large);
                }
            }
        }

        section {
            display: flex;
            flex-direction: column;
            gap: map.get(spacing.$gaps, 'one');

            p {
                @extend %base-font;
                color: var(--text-neutral);
                line-height: 1.6;
                margin: 0;
                text-align: justify;

                @include screens.mobile {
                    text-align: left;
                }
            }
        }
    }
</style>
