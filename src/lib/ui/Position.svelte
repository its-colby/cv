<script lang="ts">
    import Accordion from '$lib/ui/utils/Accordion.svelte';
    import { type AnyRole } from '$lib/info'
    import { header } from '$lib/ui/PositionHeader.svelte';
    import { details } from '$lib/ui/PositionDetails.svelte';

    let { role }: { role: AnyRole } = $props();
</script>

{#snippet wrapper_header(hovered: boolean)}
    {@render header(hovered, role)}
{/snippet}

{#snippet wrapper_details()}
    {@render details(role)}
{/snippet}


<Accordion
    --chevron-color='var(--text-neutral)'
    --chevron-color-hovered='var(--text-neutral-hovered)'
    header={wrapper_header}
    details={wrapper_details}
/>
