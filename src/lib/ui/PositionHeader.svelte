<script lang="ts" module>
    import { type IndustryRole, type Course, type ResearchRole, type TeachingRole, RoleType } from '$lib/info';
    export { header };
</script>



{#snippet course_header(header: Course)}
    <h3>
        <time>{header.date}</time>
        <span class="course-title">{header.title}</span>
    </h3>
{/snippet}


{#snippet academia_header(hovered: boolean, header: TeachingRole | ResearchRole)}
    <h3>
        <time class={hovered ? 'position-header-hovered' : ''}>{header.date}</time>
        <span class="academia-title {hovered ? 'position-header-hovered' : ''}">{header.title}</span>
    </h3>
{/snippet}


{#snippet industry_header(hovered: boolean, header: IndustryRole)}
    <h2 class="industry-header">
        <div class="top-row">
            <time class={hovered ? 'position-header-hovered' : ''}>{header.date}</time>
            <span class="role-title {hovered ? 'position-header-hovered' : ''}">{header.title}</span>
            <span class="role-company {hovered ? 'position-header-hovered' : ''}">{header.company}</span>
        </div>
        <span class="role-title-mobile {hovered ? 'position-header-hovered' : ''}">{header.title}</span>
    </h2>
{/snippet}


{#snippet header(hovered: boolean = false, header: IndustryRole | TeachingRole | ResearchRole | Course)}
    {#if header.kind === RoleType.INDUSTRY}
        {@render industry_header(hovered, header as IndustryRole)}
    {:else if header.kind === RoleType.TEACHING || header.kind === RoleType.RESEARCH}
        {@render academia_header(hovered, header as TeachingRole | ResearchRole)}
    {:else if header.kind === RoleType.COURSE}
        {@render course_header(header as Course)}
    {/if}
{/snippet}


<style>
    h2, h3 {
        display: flex;
        flex-direction: row;

        margin: 0px;

        color: var(--text-neutral);

        font-size: 18px;
        font-weight: 400;
    }

    time {
        width: 150px;
    }

    span.role-title, span.academia-title {
        width: 250px;
        font-size: 20px;
        font-weight: 500;
        color: var(--text-brand);

        @media (max-width: 700px) {
            width: 200px;
        }
    }

    .position-header-hovered, span.role-title.position-header-hovered, span.academia-title.position-header-hovered {
        color: var(--text-contrast);
    }

    .course-title {
        width: 250px;

        @media (max-width: 700px) {
            width: 230px;
        }
    }

    .industry-header {
        flex-direction: row;

        @media (max-width: 700px) {
            flex-direction: column;
        }
    }

    .top-row {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .role-title-mobile {
        display: none;
        width: 100%;
        font-size: 20px;
        font-weight: 500;
        color: var(--text-brand);
        margin-top: 4px;
    }

    @media (max-width: 700px) {
        .role-title {
            display: none;
        }

        .role-title-mobile {
            display: block;
        }

        .top-row {
            justify-content: space-between;
        }
    }
</style>