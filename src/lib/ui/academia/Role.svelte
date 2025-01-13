<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import { type Role } from './data';

    let { year, title, bullets }: Role = $props();
</script>

{#snippet header()}
    <h3>
        <time>{year}</time>
        <span>{title}</span>
    </h3>
{/snippet}

{#snippet content()}
    <ul>
        {#each bullets as bullet}
            <li><span>{bullet}</span></li>
        {/each}
    </ul>
{/snippet}

<Accordion
    --button-color='var(--text-neutral-color)'
    --button-color-hovered='var(--text-neutral-color-hovered)'
    title={header}
    content={content}
/>

<style>
    @import './styles.css';
    h3 {
        font-size: var(--text-size-medium);
        font-weight: var(--text-weight-normal);
        margin: 0px;
        display: flex;
        gap: 0px;
        align-items: center;
    }

    h3 > span {
        color: var(--text-brand-color1);
    }

    :global(summary:hover) h3 > span {
        color: var(--button-color-hovered);
        transition: 0.4s;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        list-style: none;
        margin-top: var(--list-margin-top);
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