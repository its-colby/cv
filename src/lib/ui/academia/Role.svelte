<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import { type AcademicRole, type TeachingRole } from '$lib/cv_info/academia';
    import { header, type AcademiaHeader } from '$lib/ui/new/PositionHeader.svelte';
    import { details, type TeachingDetails, type ResearchDetails } from '$lib/ui/new/PositionDetails.svelte';

    let { role }: { role: AcademicRole | TeachingRole } = $props();

    let details_data: TeachingDetails | ResearchDetails = 'topics' in role ?
        {
            kind: 'teaching',
            info: role.bullets,
            topics: role.topics,
        } :
        {
            kind: 'research',
            info: role.bullets,
        };

    let header_data: AcademiaHeader = {
        kind: 'academia',
        year: role.year,
        title: role.title,
    }
</script>

{#snippet wrapper_header(hovered: boolean)}
    {@render header(hovered, header_data)}
{/snippet}

{#snippet wrapper_details()}
    {@render details(details_data)}
{/snippet}

<Accordion
    --chevron-color='var(--text-neutral-color)'
    --chevron-color-hovered='var(--text-neutral-color-hovered)'
    header={wrapper_header}
    details={wrapper_details}
/>
