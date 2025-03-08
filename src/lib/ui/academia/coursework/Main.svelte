<script lang="ts">
    
    import SubsectionContainer from '$lib/ui/utils/section/SubsectionContainer.svelte';
    import SubsectionHeading from '$lib/ui/utils/section/Subheading.svelte';

    import Accordion from "$lib/ui/utils/standard/Accordion.svelte";

    import CourseList from './CourseList.svelte';
</script>

<SubsectionContainer>
    <Accordion 
        header={heading}
        header_data={false}
        details={details}
        details_data={false}
        --chevron-color='var(--text-neutral)'
        --chevron-color-hovered='var(--text-contrast)'
    />
</SubsectionContainer>

{#snippet heading(unused_var: boolean, highlight: boolean)}
    <SubsectionHeading 
        title="Coursework"
        highlight={highlight}
    />
{/snippet}

{#snippet details(unused_var: boolean)}
    <CourseList />
{/snippet}