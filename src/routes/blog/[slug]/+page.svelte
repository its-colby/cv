<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Header from '$lib/ui/header/Header.svelte';
    import { fetchBlogPost, fetchBlogIndex } from '$lib/blog/api';
    import type { BlogPostContent } from '$lib/blog/types';

    let post: BlogPostContent | null = null;
    let loading = true;
    let error = '';

    onMount(async () => {
        try {
            const slug = $page.params.slug;
            
            // First get the index to find the filename for this slug
            const index = await fetchBlogIndex();
            const postInfo = index.posts.find(p => p.id === slug);
            
            if (!postInfo) {
                error = 'Blog post not found';
                return;
            }

            // Fetch the actual post content
            post = await fetchBlogPost(postInfo.filename);
            
            if (!post) {
                error = 'Failed to load blog post content';
            }
        } catch (err) {
            error = 'Failed to load blog post';
            console.error(err);
        } finally {
            loading = false;
        }
    });

    // Simple YAML renderer - converts YAML object to readable format
    function renderYaml(obj: any, depth = 0): string {
        if (obj === null || obj === undefined) return '';
        
        const indent = '    '.repeat(depth); // Changed from 2 spaces to 4 spaces
        
        if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
            return obj.toString();
        }
        
        if (Array.isArray(obj)) {
            const separator = depth === 0 ? '\n' : '\n'; // Same spacing for arrays
            return obj.map(item => `${indent}- ${renderYaml(item, depth + 1)}`).join(separator);
        }
        
        if (typeof obj === 'object') {
            const entries = Object.entries(obj)
                .map(([key, value]) => {
                    if (key === 'title') return ''; // Skip title as it's shown in header
                    const renderedValue = renderYaml(value, depth + 1);
                    // Always use multi-line format for arrays (even single-item arrays) and multi-line content
                    if (Array.isArray(value) || renderedValue.includes('\n')) {
                        return `${indent}<span class="yaml-key">${key}</span>:\n${renderedValue}`;
                    }
                    return `${indent}<span class="yaml-key">${key}</span>: ${renderedValue}`;
                })
                .filter(line => line !== '');
            
            // Add different spacing based on depth level
            if (depth === 0) {
                return entries.join('\n\n'); // Double newlines for top-level items
            } else if (depth === 1) {
                return entries.join('\n'); // Single newlines for second-level items
            } else {
                return entries.join('\n'); // Single newlines for deeper levels
            }
        }
        
        return obj.toString();
    }
</script>

<Header/>
<main>
    <article>
        {#if loading}
            <div class="loading">
                <p>Loading blog post...</p>
            </div>
        {:else if error}
            <div class="error">
                <h1>Error</h1>
                <p>{error}</p>
                <a href="/blog" class="back-link">← Back to Blog</a>
            </div>
        {:else if post}
            <header>
                <h1>{post.title}</h1>
                <a href="/blog" class="back-link">← Back to Blog</a>
            </header>
            
            <section class="content">
                <pre class="yaml-content">{@html renderYaml(post.content)}</pre>
            </section>
        {/if}
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
                margin: 0 0 1rem 0;
                
                @include screens.mobile {
                    font-size: var(--font-size-kinda-large);
                }
            }

            .back-link {
                @extend %base-font;
                color: var(--text-brand);
                text-decoration: none;
                font-size: var(--font-size-small);
                opacity: 0.8;
                
                &:hover {
                    opacity: 1;
                    text-decoration: underline;
                }
            }
        }

        .loading, .error {
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

            .back-link {
                @extend %base-font;
                color: var(--text-brand);
                text-decoration: none;
                margin-top: 1rem;
                display: inline-block;
                
                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .error {
            h1 {
                font-size: var(--font-size-kinda-large);
                font-weight: var(--font-weight-bold);
                color: var(--text-error, #e74c3c);
                margin: 0 0 1rem 0;
            }
            
            p {
                color: var(--text-error, #e74c3c);
            }
        }

        .content {
            .yaml-content {
                @extend %base-font;
                background-color: var(--card-b-background);
                border-radius: 0.5rem;
                padding: 1.5rem;
                overflow-x: auto;
                white-space: pre-wrap;
                word-break: break-word;
                line-height: 1.6;
                color: var(--text-neutral);
                font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                font-size: var(--font-size-small);
                border: 1px solid var(--card-c-background);

                :global(.yaml-key) {
                    color: var(--text-brand);
                    font-weight: var(--font-weight-bold);
                }
            }
        }
    }
</style>
