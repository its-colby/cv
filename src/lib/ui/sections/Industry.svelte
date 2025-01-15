<script lang="ts">
    import { roles, type IndustryRole } from '$lib/cv_info/industry';
    import Section from '$lib/ui/sections/Section.svelte';
    import Role from '$lib/ui/industry/Role.svelte';
</script>

{#snippet item(role: IndustryRole)}
    <Role {role} />
{/snippet}

<Section title="Industry" snippet_args={roles} content={item} />