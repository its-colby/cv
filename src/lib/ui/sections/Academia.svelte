<script lang="ts">
    import Roles from "$lib/ui/academia/RoleSection.svelte";
    import { research_roles, teaching_roles, type Role as RoleType } from "$lib/ui/academia/data";
    import Coursework from "$lib/ui/academia/Coursework.svelte";
    import Section from "$lib/ui/sections/Section.svelte";
    import Degree from "$lib/ui/academia/Degree.svelte";

    type AcademiaSubHeading = {
        kind: 'degree'
    } | {
        kind: 'teaching'
        data: RoleType[]
    } | {
        kind: 'research'
        data: RoleType[]
    } | {
        kind: 'coursework'
    };

    const academia_data: AcademiaSubHeading[] = [
        {kind: 'degree'},
        {kind: 'teaching', data: teaching_roles},
        {kind: 'research', data: research_roles},
        {kind: 'coursework'}
    ];

</script>

{#snippet item(data: AcademiaSubHeading)}
    {#if data.kind === 'degree'}
        <Degree/>
    {:else if data.kind === 'teaching'}
        <Roles header="Teaching" roles={data.data}/>
    {:else if data.kind === 'research'}
        <Roles header="Research" roles={data.data}/>
    {:else if data.kind === 'coursework'}
        <Coursework/>
    {/if}
{/snippet}

<Section title="Academia" snippet_args={academia_data} content={item} />