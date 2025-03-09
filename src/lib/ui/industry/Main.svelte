<script lang="ts">

    import SectionContainer from "$lib/ui/utils/section/SectionContainer.svelte";
    import SectionHeading from "$lib/ui/utils/section/Heading.svelte";
    import SectionItems from "$lib/ui/utils/section/SectionItems.svelte";

    import Role from "$lib/ui/utils/role/Main.svelte";

    import Details from "./Details.svelte";
    import RoleHeading from "./RoleHeading.svelte";

    import { industry_roles, IndustryRole } from "$lib/cv";
</script>

{#snippet details(role: IndustryRole)}
    <Details details={role} />
{/snippet}

{#snippet role_heading(role: IndustryRole, highlight: boolean)}
    <RoleHeading industry_role={role} highlight={highlight} />
{/snippet}

<SectionContainer>
    <SectionHeading title="Industry" />
    <SectionItems>
        {#each industry_roles as role}
            <li><Role 
                heading={role_heading}
                heading_data={role}
                details={details}
                details_data={role}
            /></li>
        {/each}
    </SectionItems>
</SectionContainer>