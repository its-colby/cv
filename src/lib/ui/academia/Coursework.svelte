<script lang="ts">
    import Accordion from "$lib/utils/Accordion.svelte";
    import { courses } from './data';
</script>

<Accordion 
    {header}
    {details}
    --chevron-color='var(--text-neutral-color)'
    --chevron-color-hovered='var(--text-neutral-color-hovered)'
/>

{#snippet header(hovered: boolean)}
    <h2 class={hovered ? 'coursework-header-hovered' : ''}>Coursework</h2>
{/snippet}

{#snippet details()}
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

        gap: 10px;
        padding-top: 10px;
        padding-left: 40px;
        margin: 0;

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

    time {
        width: 150px;
    }

    .coursework-header-hovered {
        color: var(--text-neutral-color-hovered);
    }
</style>