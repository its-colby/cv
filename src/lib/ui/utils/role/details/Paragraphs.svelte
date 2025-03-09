<script lang="ts">

    let { 
        paragraphs 
    }: { 
        paragraphs: string[] 
    } = $props();

</script>

<article>
    {#each paragraphs as paragraph}
        <p>{paragraph}</p>
    {/each}
</article>

<style>
    article {
        display: flex;
        flex-direction: column;

        gap: 10px;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-neutral);
        margin: 0;
    }
</style>