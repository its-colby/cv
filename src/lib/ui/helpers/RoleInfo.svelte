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
        gap: 15px;

        list-style: none;

        margin-top: 10px;
        padding-left: 30px;
    }

    li::before {
        content: "•";

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