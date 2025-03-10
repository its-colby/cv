<script lang="ts">

    import SectionContainer from "$lib/ui/utils/section/SectionContainer.svelte";
    import SectionHeading from "$lib/ui/utils/section/Heading.svelte";

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
    <ul>
        {#each industry_roles as role}
            <li>
                <article>
                    <Role 
                        heading={role_heading}
                        heading_data={role}
                        details={details}
                        details_data={role}
                    />
                </article>
            </li>
        {/each}
    </ul>
</SectionContainer>

<style>
    ul {
        display: flex;
        flex-direction: column;

        list-style: none;

        gap: 0.5rem;
        padding: 0;
        padding-top: 1rem;
    }
</style>