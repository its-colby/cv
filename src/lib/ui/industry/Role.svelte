<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import IndustryH2 from '$lib/ui/helpers/IndustryH2.svelte';
    import RoleInfo from '$lib/ui/helpers/RoleInfo.svelte';
    import { type Role } from './data';
    let { role } : { role: Role } = $props();
</script>

{#snippet header(hovered: boolean)}
    <IndustryH2 {hovered} time={role.time} title={role.title} company={role.company} />
{/snippet}

{#snippet details()}
    <RoleInfo bullets={role.bullets} />
{/snippet}

<Accordion
    --chevron-color={'var(--text-neutral-color)'}
    --chevron-color-hovered={'var(--text-neutral-color-hovered)'}
    {header}
    {details}
/>