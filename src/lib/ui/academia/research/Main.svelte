<script lang="ts">

    import RoleSection from '$lib/ui/academia/utils/RoleSection.svelte';

    import Details from './Details.svelte';

    import { ResearchRole, research_roles } from '$lib/cv';

</script>

{#snippet details(role: ResearchRole)}
    <Details details={role} />
{/snippet}

<RoleSection 
    roles={research_roles}
    title="Research"
    details={details}
/>
