<script lang="ts">
    import { Event } from '$lib/cv';

    import Container from '$lib/ui/event/details/Container.svelte';
    import Paragraphs from '$lib/ui/event/details/Paragraphs.svelte';

    let { details }: { details: Event } = $props();
</script>

<Container>
    <Paragraphs paragraphs={details.contributions || []} />
</Container>