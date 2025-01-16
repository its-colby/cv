<script lang="ts">
    import Accordion from "$lib/ui/utils/Accordion.svelte";
    import { courses, type Course } from '$lib/info';
    import { header } from '$lib/ui/PositionHeader.svelte';
</script>

<Accordion 
    header={wrapper_header}
    {details}
    --chevron-color='var(--text-neutral-color)'
    --chevron-color-hovered='var(--text-neutral-color-hovered)'
/>

{#snippet wrapper_header(hovered: boolean)}
    <h2 class={hovered ? 'coursework-header-hovered' : ''}>Coursework</h2>
{/snippet}

{#snippet details()}
    <ul id="coursework-list">
        {#each courses as course}
            <li>
                {@render header(false, course)}
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

    .coursework-header-hovered {
        color: var(--text-neutral-color-hovered);
    }
</style>