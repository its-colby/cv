<script lang="ts">

    import EventUI from "$lib/ui/event/Event.svelte";
    import { Event, type YearTimeline } from "$lib/cv";

    let { timeline_by_year }: { timeline_by_year: YearTimeline[] } = $props();

</script>

<div>
    {#each timeline_by_year as yearGroup}
        <section>
            <h2>{yearGroup.year}</h2>
            <ul>
                {#each yearGroup.events as event}
                    <li>
                        <article>
                            <EventUI event={event} />
                        </article>
                    </li>
                {/each}
            </ul>
        </section>
    {/each}
</div>


<style lang="scss">
    @use '$lib/theme/spacing.scss';
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/fonts.scss';
    @use "sass:map";

    div {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    h2 {
        font-size: var(--font-size-kinda-large);
        font-weight: var(--font-weight-bold);
        color: var(--text-neutral);
        margin: 0;
        padding: 0;
        border-bottom: 1px solid var(--text-contrast);
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 0.5rem;
        padding: 0;
        margin: 0;
    }

</style>