<script lang="ts" module>

    interface Base {
        kind: 'academia' | 'course' | 'industry';
        year: string;
        title: string;
    }

    export interface AcademiaHeader extends Base {
        kind: 'academia';
    };

    export interface CourseHeader extends Base {
        kind: 'course';
    };

    export interface IndustryHeader extends Base {
        kind: 'industry';
        company: string;
    };

    export type AnyHeader = AcademiaHeader | CourseHeader | IndustryHeader;

    export { header };
</script>



{#snippet course_header(header: CourseHeader)}
    <h3>
        <time>{header.year}</time>
        <span>{header.title}</span>
    </h3>
{/snippet}


{#snippet academia_header(hovered: boolean, header: AcademiaHeader)}
    <h3>
        <time class={hovered ? 'position-header-hovered' : ''}>{header.year}</time>
        <span class="academia-title {hovered ? 'position-header-hovered' : ''}">{header.title}</span>
    </h3>
{/snippet}


{#snippet industry_header(hovered: boolean, header: IndustryHeader)}
    <h2>
        <time class={hovered ? 'position-header-hovered' : ''}>{header.year}</time>
        <span class="role-title {hovered ? 'position-header-hovered' : ''}">{header.title}</span>
        <span class="role-company {hovered ? 'position-header-hovered' : ''}">{header.company}</span>
    </h2>
{/snippet}


{#snippet header(hovered: boolean = false, header: AnyHeader)}
    {#if header.kind === 'industry'}
        {@render industry_header(hovered, header)}
    {:else if header.kind === 'academia'}
        {@render academia_header(hovered, header)}
    {:else if header.kind === 'course'}
        {@render course_header(header)}
    {/if}
{/snippet}


<style>
    h2, h3 {
        display: flex;
        flex-direction: row;

        margin: 0px;

        color: var(--text-neutral-color);

        font-size: 18px;
        font-weight: 400;
    }

    time {
        width: 150px;
    }

    span.role-title {
        width: 250px;
        font-size: 20px;
        font-weight: 500;
        color: var(--text-brand-color1);
    }

    span.academia-title {
        color: var(--text-brand-color1);
    }

    .position-header-hovered, span.role-title.position-header-hovered, span.academia-title.position-header-hovered {
        color: var(--text-contrast-color);
    }
</style>