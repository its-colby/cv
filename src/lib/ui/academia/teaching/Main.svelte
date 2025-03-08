<script lang="ts">

    import RoleSection from '$lib/ui/academia/utils/RoleSection.svelte';

    import Details from './Details.svelte';

    import type { TeachingRole } from '$lib/info';

    import { teaching_roles } from '$lib/info';

</script>

{#snippet details(role: TeachingRole)}
    <Details details={role} />
{/snippet}

<RoleSection 
    roles={teaching_roles}
    title="Teaching"
    details={details}
/>
