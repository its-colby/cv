<script lang="ts">
    import { TeachingRole } from '$lib/cv';

    import DetailsContainer from '$lib/ui/utils/role/details/Container.svelte';
    import DetailsHeading from '$lib/ui/utils/role/details/Heading.svelte';
    import DetailsParagraphs from '$lib/ui/utils/role/details/Paragraphs.svelte';

    let { details }: { details: TeachingRole } = $props();
</script>

<DetailsContainer>
    <DetailsParagraphs paragraphs={details.contributions} />
    <DetailsHeading title="Course Topics" />
    <DetailsParagraphs paragraphs={[details.topics]} />
</DetailsContainer>