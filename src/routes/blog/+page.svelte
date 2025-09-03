<script lang="ts">
    import { onMount } from 'svelte';
    import Header from '$lib/ui/header/Header.svelte';
    import { fetchBlogIndex } from '$lib/blog/api';
    import type { BlogPost } from '$lib/blog/types';

    let posts: BlogPost[] = [];
    let loading = true;
    let error = '';

    onMount(async () => {
        try {
            const index = await fetchBlogIndex();
            posts = index.posts;
        } catch (err) {
            error = 'Failed to load blog posts';
            console.error(err);
        } finally {
            loading = false;
        }
    });
</script>

<Header/>
<main>
    <article>
        <header>
            <h1>Blog</h1>
        </header>
        
        <section>
            {#if loading}
                <div class="loading">
                    <p>Loading blog posts...</p>
                </div>
            {:else if error}
                <div class="error">
                    <p>{error}</p>
                </div>
            {:else if posts.length === 0}
                <div class="no-posts">
                    <p>No blog posts available yet.</p>
                </div>
            {:else}
                <div class="posts-list">
                    {#each posts as post}
                        <a href="/blog/{post.id}" class="post-item">
                            <h2>{post.title}</h2>
                        </a>
                    {/each}
                </div>
            {/if}
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

            .loading, .error, .no-posts {
                text-align: center;
                padding: 3rem 0;

                p {
                    @extend %base-font;
                    color: var(--text-neutral);
                    line-height: 1.6;
                    margin: 0;
                    font-style: italic;
                    opacity: 0.8;
                }
            }

            .error p {
                color: var(--text-error, #e74c3c);
            }

            .posts-list {
                display: flex;
                flex-direction: column;
                gap: map.get(spacing.$gaps, 'two');

                .post-item {
                    display: block;
                    padding: 1.5rem;
                    background-color: var(--card-b-background);
                    border-radius: 0.5rem;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    border: 1px solid transparent;

                    &:hover {
                        background-color: var(--card-c-background);
                        border-color: var(--text-brand);
                        transform: translateY(-2px);
                    }

                    h2 {
                        @extend %base-font;
                        font-size: var(--font-size-kinda-large);
                        font-weight: var(--font-weight-bold);
                        color: var(--text-brand);
                        margin: 0;
                        line-height: 1.4;
                        
                        @include screens.mobile {
                            font-size: var(--font-size-medium);
                        }
                    }
                }
            }
        }
    }
</style>
