<script lang="ts">

    import RoleSection from '$lib/ui/academia/utils/RoleSection.svelte';

    import Details from './Details.svelte';

    import { TeachingRole, teaching_roles } from '$lib/cv';

</script>

{#snippet details(role: TeachingRole)}
    <Details details={role} />
{/snippet}

<RoleSection 
    roles={teaching_roles}
    title="Teaching"
    details={details}
/>
