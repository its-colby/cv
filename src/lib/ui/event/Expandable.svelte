<script lang="ts">

    import { Event } from '$lib/cv';
    import Header from '$lib/ui/event/Header.svelte';
    import Accordion from '$lib/ui/utils/Accordion.svelte';
    import type { Snippet } from "svelte";
    
    let { 
        details,
        data
    }: { 
        details: Snippet<[Event]>,
        data: Event
    } = $props();

</script>

{#snippet heading(event: Event, highlight: boolean)}
    <Header event={event} highlight={highlight} />
{/snippet}

<Accordion
    --chevron-color='var(--text-neutral)'
    --chevron-color-hovered='var(--text-neutral-hovered)'
    header={heading}
    header_data={data}
    details={details}
    details_data={data}
/>
