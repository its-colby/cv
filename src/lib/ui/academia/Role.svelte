<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import RoleInfo from '$lib/ui/helpers/RoleInfo.svelte';
    import AcademiaH3 from '$lib/ui/helpers/AcademiaH3.svelte';
    import { type AcademicRole } from '$lib/cv_info/academia';

    let { year, title, bullets }: AcademicRole = $props();
</script>

{#snippet header(hovered: boolean)}
    <AcademiaH3 {hovered} year={year} title={title} />
{/snippet}

{#snippet details()}
    <RoleInfo bullets={bullets} />
{/snippet}

<Accordion
    --chevron-color='var(--text-neutral-color)'
    --chevron-color-hovered='var(--text-neutral-color-hovered)'
    {header}
    {details}
/>
