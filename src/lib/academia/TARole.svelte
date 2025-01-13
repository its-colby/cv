<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    let { year, title, bullets }: { year: string; title: string; bullets: string[] } = $props();
</script>

{#snippet teaching_header()}
    <h3>
        <time>{year}</time>
        <span>{title}</span>
    </h3>
{/snippet}

{#snippet teaching_content()}
    <ul>
        {#each bullets as bullet}
            <li><span>{bullet}</span></li>
        {/each}
    </ul>
{/snippet}

<Accordion
    --button-color='var(--text-neutral-color)'
    --button-color-hovered='var(--text-neutral-color-hovered)'
    title={teaching_header}
    content={teaching_content}
/>

<style>
    h3 {
        font-size: 18px;
        font-weight: 400;
        margin: 0px;
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    h3 > time {
        width: 150px;
    }

    h3 > span {
        color: var(--text-brand-color1);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
        padding-left: 30px;
    }

    li::before {
        content: "•";
        color: var(--text-neutral-color);
        font-size: 18px;
        margin-right: 0.5rem;
    }

    li > span {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
    }
</style>