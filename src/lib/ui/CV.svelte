<script lang="ts">

    import Timeline from "$lib/ui/Timeline.svelte";
    import PDF from "$lib/ui/PDF.svelte";
    import Contact from "$lib/ui/Contact.svelte";
    import FilterRadio from "$lib/ui/utils/FilterRadio.svelte";

    import { timeline_by_year, type YearTimeline } from "$lib/cv";

    const eventKinds = ['All', 'Industry Roles', 'Academic Roles', 'Education', 'Personal Projects'];
    
    // Mapping from display kinds to actual event kinds
    const kindMapping: Record<string, string[]> = {
        'All': ['Industry', 'Research', 'Teaching', 'Gap Year', 'Enrollment', 'Graduation', 'Course', 'Personal'],
        'Industry Roles': ['Industry'],
        'Academic Roles': ['Research', 'Teaching'],
        'Education': ['Gap Year', 'Enrollment', 'Graduation', 'Course'],
        'Personal Projects': ['Personal']
    };
    
    // Filter state - 'All' selected by default
    let selectedKind = $state('All');
    
    // Get all actual event kinds that should be included based on selected display kind
    let enabledActualKinds = $derived(() => {
        const actualKinds = new Set<string>();
        const mappedKinds = kindMapping[selectedKind] || [];
        for (const actualKind of mappedKinds) {
            actualKinds.add(actualKind);
        }
        return actualKinds;
    });
    
    // Filtered timeline based on selected kind
    let filteredTimeline = $derived(
        timeline_by_year.map(yearGroup => ({
            ...yearGroup,
            events: yearGroup.events.filter(event => 
                enabledActualKinds().has(event.kind)
            )
        })).filter(yearGroup => yearGroup.events.length > 0)
    );
    
    function selectKind(kind: string) {
        selectedKind = kind;
    }
</script>

<section>
    <header>
        <PDF />
        <Contact />
        
        <div class="filters">
            <h3>Filter CV</h3>
            <FilterRadio 
                options={eventKinds}
                selectedValue={selectedKind}
                onchange={selectKind}
                name="event-filter"
            />
        </div>
    </header>

    <Timeline timeline_by_year={filteredTimeline} />
</section>


<style lang="scss">
    @use '$lib/theme/spacing.scss';
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/fonts.scss';
    @use "sass:map";

    section {
        display: flex;
        flex-direction: column;
        flex: 1;
        box-sizing: border-box; 
        gap: 4rem;
                
        padding-left: spacing.$indent;
        padding-right: spacing.$indent;
        padding-top: 2rem;
        padding-bottom: 2rem;
        
        border-radius: 0.66rem;

        background-color: var(--card-a-background);

        @include screens.desktop {
            margin-left: 10rem;
            margin-right: 10rem;
            max-width: 45rem;
        }

        @include screens.mobile {
            padding-left: 0;
            padding-right: 0;
        }
    }

    header {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .filters {
            display: flex;
            flex-direction: column;
            gap: map.get(spacing.$gaps, 'half');
        }
    }

    h3 {
        font-size: var(--font-size-medium);
        font-weight: var(--font-weight-normal);
        margin: 0;
        padding: 0 0.5rem;
        color: var(--text-neutral);
    }


</style>