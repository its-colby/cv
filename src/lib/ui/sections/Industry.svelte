<script lang="ts">
    import { roles } from '$lib/ui/industry/data';
    import Role from '$lib/ui/industry/Role.svelte';
</script>

<h1>Industry</h1>
<ul>
    {#each roles as role}
        <li><Role {role} /></li>
    {/each}
</ul>

<style>
    @import './section.css';
</style>