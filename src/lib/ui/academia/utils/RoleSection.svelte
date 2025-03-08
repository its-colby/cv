<script lang="ts" generics="RoleType extends TeachingRole | ResearchRole">
    import type { TeachingRole, ResearchRole } from '$lib/info';

    import type { Snippet } from 'svelte';

    import SubsectionContainer from '$lib/ui/utils/section/SubsectionContainer.svelte';
    import SubsectionHeading from '$lib/ui/utils/section/Subheading.svelte';

    import Role from '$lib/ui/utils/role/Main.svelte';

    import RoleHeading from './RoleHeading.svelte';
    import RoleItems from './RoleItems.svelte';

    let {
        roles,
        title,
        details
    }: {
        roles: RoleType[],
        title: string,
        details: Snippet<[RoleType]>
    } = $props();
</script>

{#snippet role_heading(role: RoleType, highlight: boolean)}
    <RoleHeading role={role} highlight={highlight} />
{/snippet}

<SubsectionContainer>
    <SubsectionHeading title={title} highlight={false} />
    <RoleItems>
        {#each roles as role}
            <li><Role 
                heading={role_heading}
                heading_data={role}
                details={details}
                details_data={role}
            /></li>
        {/each}
    </RoleItems>
</SubsectionContainer>
