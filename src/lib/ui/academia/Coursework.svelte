<script lang="ts">
    import Accordion from "$lib/utils/Accordion.svelte";
    import { courses } from './data';
</script>

<Accordion 
    title={title} 
    content={content}
    --button-color='var(--text-neutral-color)'
    --button-color-hovered='var(--text-neutral-color-hovered)'
/>

{#snippet title()}
    <h2>Coursework</h2>
{/snippet}

{#snippet content()}
    <ul id="coursework-list">
        {#each courses as course}
            <li>
                <h3>
                    <time>{course.date}</time>
                    <span>{course.title}</span>
                </h3>
            </li>
        {/each}
    </ul>
{/snippet}

<style>
    h2 {
    font-size: 20px;
    font-weight: 500;
    color: var(--text-neutral-color);
    margin: 0px;
}
    ul#coursework-list {
        display: flex;
        flex-direction: column;

        gap: var(--list-items-gap);
        padding: 0;
        margin-top: var(--list-margin-top);
        margin-left: var(--list-indentation);

        list-style: none;
    }

    li > h3 {
        display: flex;
        align-items: center;

        color: var(--text-neutral-color);

        gap: 0;
        margin: 0;

        font-size: var(--text-size-medium);
        font-weight: 400;
    }

    :global(summary:hover) h2 {
        color: var(--text-neutral-color-hovered);
        transition: 0.4s;
    }
</style>