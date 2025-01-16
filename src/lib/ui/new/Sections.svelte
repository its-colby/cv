<script lang="ts" module>
    import { roles as industry_positions } from '$lib/cv_info/industry';
    import { type AcademicRole, type TeachingRole } from '$lib/cv_info/academia';
    import { type IndustryRole } from '$lib/cv_info/industry'
    import Position from '$lib/ui/new/Position.svelte';
    import { research_roles, teaching_roles } from "$lib/cv_info/academia";
    import Coursework from "$lib/ui/new/Coursework.svelte";

    export { section }
</script>

{#snippet positions_list_elements(positions: AcademicRole[] | TeachingRole[] | IndustryRole[])}
    {#each positions as position}
        <li><Position role={position}/></li>
    {/each}
{/snippet}


{#snippet academia_positions(text: string, positions: AcademicRole[] | TeachingRole[] | IndustryRole[])}
    <h2>{text}</h2>
    <ul class="academia-positions">
        {@render positions_list_elements(positions)}
    </ul>
{/snippet}


{#snippet header(academia: boolean)}
    {#if academia}
        <h1>{"Academia"}</h1>
    {:else}
        <h1>{"Industry"}</h1>
    {/if}
{/snippet}


{#snippet details(academia: boolean)}
    <ul class="section">
        {#if academia}
            <li>{@render degree()}</li>
            <li>{@render academia_positions("Teaching", teaching_roles)}</li>
            <li>{@render academia_positions("Research", research_roles)}</li>
            <li><Coursework/></li>
        {:else}
            {@render positions_list_elements(industry_positions)}
        {/if}
    </ul>
{/snippet}

{#snippet section(academia: boolean)}
    {@render header(academia)}
    {@render details(academia)}
{/snippet}


{#snippet degree()}
    <div>
        <h2 class="degree">Degree</h2>
        <span class="degree-title">A.B. Computer Science</span>
        <span class="degree-school">Brown University</span>
    </div>
{/snippet}


<style>
    h1 {
        text-align: center;

        font-size: 30px;
        font-weight: 500;

        color: var(--text-neutral-color);

        margin: 0px;
    }

    ul {
        display: flex;
        flex-direction: column;

        list-style: none;
    }

    ul.section {
        gap: 20px;
        padding: 0px;
        padding-top: 30px;
    }

    ul.academia-positions {
        gap: 10px;
        padding-top: 10px;
        padding-left: 40px;
        margin: 0;
    }

    h2 {
        font-size: 20px;
        font-weight: 500;
        color: var(--text-neutral-color);
        margin: 0px;
    }

    h2.degree {
        width: 190px;
    }

    div {
        display: flex;
        flex-direction: row;
    }

    span {
        font-weight: 400;
        font-size: var(--text-size-medium);
        color: var(--text-neutral-color);
    }

    span.degree-title {
        width: 250px;
    }
</style>