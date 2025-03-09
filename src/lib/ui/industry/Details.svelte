<script lang="ts">

    import { IndustryRole } from '$lib/cv';

    import Contract from '$lib/ui/utils/role/details/Contract.svelte';
    import DetailsHeading from '$lib/ui/utils/role/details/Heading.svelte';
    import DetailsParagraphs from '$lib/ui/utils/role/details/Paragraphs.svelte';
    import DetailsContainer from '$lib/ui/utils/role/details/Container.svelte';

    let { details }: { details: IndustryRole } = $props();

</script>


<DetailsContainer>
    <Contract 
        contract={details.commitment}
        duration={details.duration}
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
            paragraphs={details.contributions} 
        />
    </section>
</DetailsContainer>