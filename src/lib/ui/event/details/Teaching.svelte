<script lang="ts">
    import { TeachingRole } from '$lib/cv';

    import DetailsContainer from '$lib/ui/event/details/Container.svelte';
    import DetailsHeading from '$lib/ui/event/details/Heading.svelte';
    import DetailsParagraphs from '$lib/ui/event/details/Paragraphs.svelte';

    let { details }: { details: TeachingRole } = $props();
</script>

<DetailsContainer>
    <DetailsParagraphs paragraphs={details.contributions || []} />
    <DetailsHeading title="Course Topics" />
    <DetailsParagraphs paragraphs={[details.topics]} />
</DetailsContainer>