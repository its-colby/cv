<script lang="ts">
    import Header from '$lib/ui/header/Header.svelte';
</script>

<Header/>
<main>
    <article>        
        <section>
            <p>
                Hello! My name is Colby! Keeping reading this page to learn a bit about me!
            </p>
            
            <p>
                TBD
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
