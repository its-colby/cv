<script lang="ts">
    let { bullets }: { bullets: string[] } = $props();
</script>

<ul>
    {#each bullets as bullet}
        <li><span>{bullet}</span></li>
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;
        gap: 12px;

        list-style: none;

        padding-left: 30px;
        padding-right: 10px;
    }

    li {
        display: flex;
    }

    li::before {
        content: "•";
        flex-shrink: 0;
        margin-right: 0.5rem;
        font-size: 18px;
        color: var(--text-neutral-color);
    }

    span {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
    }
</style>