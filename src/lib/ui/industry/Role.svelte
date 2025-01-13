<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import { type Role } from './data';
    let { role } : { role: Role } = $props();
</script>

{#snippet header()}
<h2>
    <time>{role.time}</time>
    <span class="role-title">{role.title}</span>
    <span class="role-company">{role.company}</span>
</h2>
{/snippet}

{#snippet content()}
    <ul>
        {#each role.bullets as bullet}
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
    h2 {
        color: var(--text-neutral-color);

        margin: 0px;
        display: flex;
        flex-direction: row;
        font-size: 18px;
        font-weight: 400;
    }

    span.role-title {
        width: 250px;
        font-size: 20px;
        font-weight: 500;
        color: var(--text-brand-color1);
    }

    time {
        width: 150px;
    }

    :global(summary:hover) h2 > time {
        color: var(--button-color-hovered);
        transition: 0.4s;
    }

    :global(summary:hover) h2 > span.role-title {
        color: var(--button-color-hovered);
        transition: 0.4s;
    }

    :global(summary:hover) h2 > span.role-company {
        color: var(--button-color-hovered);
        transition: 0.4s;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-top: 10px;
        padding-left: 30px;
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