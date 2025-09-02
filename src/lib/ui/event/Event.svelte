<script lang="ts">
    import { 
        Event, 
        ResearchRole, 
        TeachingRole, 
        IndustryRole,
        ProfessionalBreak,
        GapYear,
        Enrollment,
        Graduation,
        Course 
    } from "$lib/cv";
    import IndustryDetails from "$lib/ui/event/details/Industry.svelte";
    import TeachingDetails from "$lib/ui/event/details/Teaching.svelte";
    import ResearchDetails from "$lib/ui/event/details/Research.svelte";
    import Header from "$lib/ui/event/Header.svelte";
    import Expandable from "$lib/ui/event/Expandable.svelte";
    let { event }: { event: Event } = $props();
</script>

{#snippet industry_details(details: Event)}
    <IndustryDetails details={details as IndustryRole} />
{/snippet}

{#snippet teaching_details(details: Event)}
    <TeachingDetails details={details as TeachingRole} />
{/snippet}

{#snippet research_details(details: Event)}
    <ResearchDetails details={details as ResearchRole} />
{/snippet}

{#if event instanceof ResearchRole}
    <Expandable data={event} details={research_details} />

{:else if event instanceof TeachingRole}
    <Expandable data={event} details={teaching_details} />

{:else if event instanceof IndustryRole}
    <Expandable data={event} details={industry_details} />

{:else if event instanceof ProfessionalBreak}
    <Expandable data={event} details={research_details} />

{:else if event instanceof GapYear}
    <Expandable data={event} details={research_details} />

{:else}
    <Header event={event} highlight={false}/>
{/if}