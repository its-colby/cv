<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import IndustryH2 from '$lib/ui/helpers/IndustryH2.svelte';
    import RoleInfo from '$lib/ui/helpers/RoleInfo.svelte';
    import { type Role } from './data';
    let { role } : { role: Role } = $props();
</script>

{#snippet header()}
    <IndustryH2 time={role.time} title={role.title} company={role.company} />
{/snippet}

{#snippet content()}
    <RoleInfo bullets={role.bullets} />
{/snippet}

<Accordion
    --button-color='var(--text-neutral-color)'
    --button-color-hovered='var(--text-neutral-color-hovered)'
    title={header}
    content={content}
/>