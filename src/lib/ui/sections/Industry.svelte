<script lang="ts">
    import { roles, type Role as RoleType } from '$lib/ui/industry/data';
    import Section from '$lib/ui/sections/Section.svelte';
    import Role from '$lib/ui/industry/Role.svelte';
</script>

{#snippet item(role: RoleType)}
    <Role {role} />
{/snippet}

<Section title="Industry" snippet_args={roles} content={item} />