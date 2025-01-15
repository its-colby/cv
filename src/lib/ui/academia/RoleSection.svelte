<script lang="ts">
    import Role from './Role.svelte';
    import { type AcademicRole } from '$lib/cv_info/academia';
    let { header, roles } : { header: string, roles: AcademicRole[] } = $props();
</script>

<h2>{header}</h2>
<ul>
    {#each roles as role}
        <li>
            <Role {role} />
        </li>
    {/each}
</ul>

<style>
    h2 {
    font-size: 20px;
    font-weight: 500;
    color: var(--text-neutral-color);
    margin: 0px;
}

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: none;
        padding-top: 10px;
        padding-left: 40px;
        margin: 0;
    }

    li {
        width: 100%;
    }
</style>