<script lang="ts">
    import { ResearchRole } from '$lib/cv';

    import Container from '$lib/ui/utils/role/details/Container.svelte';
    import Paragraphs from '$lib/ui/utils/role/details/Paragraphs.svelte';

    let { details }: { details: ResearchRole } = $props();
</script>

<Container>
    <Paragraphs paragraphs={details.contributions} />
</Container>