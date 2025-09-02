<script lang="ts">

    import { IndustryRole } from '$lib/cv';

    import Contract from '$lib/ui/event/details/Contract.svelte';
    import DetailsHeading from '$lib/ui/event/details/Heading.svelte';
    import DetailsParagraphs from '$lib/ui/event/details/Paragraphs.svelte';
    import DetailsContainer from '$lib/ui/event/details/Container.svelte';

    let { details }: { details: IndustryRole } = $props();
</script>


<DetailsContainer>
    <Contract 
        contract={details.commitment || 'Unknown'}
        duration={details.date.duration}
    />
    <section>
        <DetailsHeading 
            title="Responsibilities" 
        />
        <DetailsParagraphs 
            paragraphs={[details.responsibilities]} 
        />
    </section>
    <section>
        <DetailsHeading 
            title="Impact" 
        />
        <DetailsParagraphs 
            paragraphs={[details.impact]} 
        />
    </section>
    <section>
        <DetailsHeading 
            title="Notable Contributions" 
        />
        <DetailsParagraphs 
            paragraphs={details.contributions || []} 
        />
    </section>
</DetailsContainer>
