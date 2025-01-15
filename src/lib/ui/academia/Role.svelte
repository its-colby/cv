<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import RoleInfo from '$lib/ui/helpers/RoleInfo.svelte';
    import AcademiaH3 from '$lib/ui/helpers/AcademiaH3.svelte';
    import { type AcademicRole, type TeachingRole } from '$lib/cv_info/academia';
    import DetailedTeaching from '../helpers/DetailedTeaching.svelte';

    let { role }: { role: AcademicRole | TeachingRole } = $props();
</script>

{#snippet header(hovered: boolean)}
    <AcademiaH3 {hovered} year={role.year} title={role.title} />
{/snippet}

{#snippet details()}
    {#if 'topics' in role}
        <DetailedTeaching topics={role.topics} bullets={role.bullets} />
    {:else}
        <RoleInfo bullets={role.bullets} />
    {/if}
{/snippet}

<Accordion
    --chevron-color='var(--text-neutral-color)'
    --chevron-color-hovered='var(--text-neutral-color-hovered)'
    {header}
    {details}
/>
