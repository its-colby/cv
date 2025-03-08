<script lang="ts">

    let { 
        title,
        highlight
    }: { 
        title: string,
        highlight: boolean
    } = $props();

</script>

<h2
    class={highlight ? 'highlight' : ''}
>
    {title}
</h2>

<style>
    h2 {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--text-neutral);
        margin: 0;
    }

    .highlight {
        color: var(--text-contrast);
    }
</style>