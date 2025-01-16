<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import { type IndustryRole } from '$lib/cv_info/industry';
    import { header, type IndustryHeader } from '$lib/ui/new/PositionHeader.svelte';
    import { details, type IndustryDetails } from '$lib/ui/new/PositionDetails.svelte';
    let { role } : { role: IndustryRole } = $props();

    let header_data: IndustryHeader = {
        kind: 'industry',
        year: role.time,
        title: role.title,
        company: role.company,
    };

    let details_data: IndustryDetails = {
        kind: 'industry',
        contract: role.contract,
        duration: role.duration,
        responsibilities: role.responsibilities,
        impact: role.impact,
        contributions: role.contributions,
    };
</script>

{#snippet wrapper_header(hovered: boolean)}
    {@render header(hovered, header_data)}
{/snippet}

{#snippet wrapper_details()}
    {@render details(details_data)}
{/snippet}

<Accordion
    --chevron-color={'var(--text-neutral-color)'}
    --chevron-color-hovered={'var(--text-neutral-color-hovered)'}
    header={wrapper_header}
    details={wrapper_details}
/>