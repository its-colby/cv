<script lang="ts" generics="HdrDataType, DetailsDataType">

    import Accordion from '$lib/ui/utils/standard/Accordion.svelte';
    import type { Snippet } from "svelte";
    
    let { 
        heading,
        heading_data,
        details,
        details_data
    }: { 
        heading: Snippet<[HdrDataType, boolean]>, 
        heading_data: HdrDataType,
        details: Snippet<[DetailsDataType]>,
        details_data: DetailsDataType
    } = $props();

</script>

<Accordion
    --chevron-color='var(--text-neutral)'
    --chevron-color-hovered='var(--text-neutral-hovered)'
    header={heading}
    header_data={heading_data}
    details={details}
    details_data={details_data}
/>
