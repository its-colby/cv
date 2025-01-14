<script lang="ts">
    import Accordion from '$lib/utils/Accordion.svelte';
    import RoleInfo from '$lib/ui/helpers/RoleInfo.svelte';
    import AcademiaH3 from '$lib/ui/helpers/AcademiaH3.svelte';
    import { type Role } from './data';

    let { year, title, bullets }: Role = $props();
</script>

{#snippet header()}
    <AcademiaH3 year={year} title={title} />
{/snippet}

{#snippet content()}
    <RoleInfo bullets={bullets} />
{/snippet}

<Accordion
    --button-color='var(--text-neutral-color)'
    --button-color-hovered='var(--text-neutral-color-hovered)'
    title={header}
    content={content}
/>
