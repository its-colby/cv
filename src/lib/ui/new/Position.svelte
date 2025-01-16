<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import { type AcademicRole, type TeachingRole } from '$lib/cv_info/academia';
    import { type IndustryRole } from '$lib/cv_info/industry'
    import { header, type AcademiaHeader, type IndustryHeader } from '$lib/ui/new/PositionHeader.svelte';
    import { details, type TeachingDetails, type ResearchDetails, type IndustryDetails } from '$lib/ui/new/PositionDetails.svelte';

    let { role }: { role: AcademicRole | TeachingRole | IndustryRole} = $props();

    let details_data: TeachingDetails | ResearchDetails | IndustryDetails = 'topics' in role ?
        {
            kind: 'teaching',
            info: role.bullets,
            topics: role.topics,
        } : 'contract' in role ?
            {
                kind: 'industry',
                contract: role.contract,
                duration: role.duration,
                responsibilities: role.responsibilities,
                impact: role.impact,
                contributions: role.contributions
            } :
            {
                kind: 'research',
                info: role.bullets,
            }

    let header_data: AcademiaHeader | IndustryHeader = 'contract' in role ? 
        {
            kind: 'industry',
            year: role.time,
            title: role.title,
            company: role.company
        } :
        {
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
