<script lang="ts">
    let { paragraphs }: { paragraphs: string[] } = $props();
</script>

<article>
    {#each paragraphs as paragraph}
        <p>{paragraph}</p>
    {/each}
</article>

<style lang="scss">
    @use '$lib/theme/fonts.scss';
    @use '$lib/theme/spacing.scss';
    
    article {
        display: flex;
        flex-direction: column;

        gap: 0.5rem;
    }

    p {
        @extend %base-font;
        color: var(--text-neutral);
        margin: 0;
    }
</style>