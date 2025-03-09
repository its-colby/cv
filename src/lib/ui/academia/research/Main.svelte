<script lang="ts">

    import SubsectionContainer from '$lib/ui/utils/section/SubsectionContainer.svelte';
    import SubsectionHeading from '$lib/ui/utils/section/Subheading.svelte';

    import RoleHeading from '$lib/ui/academia/utils/RoleHeading.svelte';
    import RoleItems from '$lib/ui/academia/utils/RoleItems.svelte';

    import Role from '$lib/ui/utils/role/Main.svelte';

    import Details from './Details.svelte';

    import { research_roles, ResearchRole } from '$lib/cv';

</script>

{#snippet role_heading(role: ResearchRole, highlight: boolean)}
    <RoleHeading role={role} highlight={highlight} />
{/snippet}

{#snippet details(role: ResearchRole)}
    <Details details={role} />
{/snippet}

<SubsectionContainer>
    <SubsectionHeading title={"Research"} highlight={false} />
    <RoleItems>
        {#each research_roles as role}
            <Role 
                heading={role_heading}
                heading_data={role}
                details={details}
                details_data={role}
            />
        {/each}
    </RoleItems>
</SubsectionContainer>
