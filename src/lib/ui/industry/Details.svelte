<script lang="ts">

    import { type IndustryRole } from '$lib/info';

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
    <DetailsHeading 
        title="Responsibilities" 
    />
    <DetailsParagraphs 
        paragraphs={[details.responsibilities]} 
    />
    <DetailsHeading 
        title="Impact" 
    />
    <DetailsParagraphs 
        paragraphs={[details.impact]} 
    />
    <DetailsHeading 
        title="Notable Contributions" 
    />
    <DetailsParagraphs 
        paragraphs={details.contributions} 
    />
</DetailsContainer>