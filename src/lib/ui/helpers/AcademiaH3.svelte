<script lang="ts">
    let { year, title }: { year: string, title: string } = $props();
</script>

<h3>
    <time>{year}</time>
    <span>{title}</span>
</h3>

<style>
    h3 {
        display: flex;
        align-items: center;
        gap: 0;

        margin: 0;
        
        font-size: 18px;
        font-weight: 400;
    }

    time {
        width: 150px;
        color: var(--text-neutral-color);
    }

    span {
        color: var(--text-brand-color1);
    }

    :global(summary:hover) time, :global(summary:hover) span {
        color: var(--button-color-hovered);
        transition: 0.4s;
    }
</style>