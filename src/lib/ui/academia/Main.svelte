<script lang="ts">

    import SectionContainer from "$lib/ui/utils/section/SectionContainer.svelte";
    import SectionHeading from "$lib/ui/utils/section/Heading.svelte";
    import SectionItems from "$lib/ui/utils/section/SectionItems.svelte";

    import Degrees from "./degrees/Main.svelte";
    import Teaching from "./teaching/Main.svelte";
    import Research from "./research/Main.svelte";
    import Coursework from "./coursework/Main.svelte";
</script>

<SectionContainer>
    <SectionHeading title="Academia" />
    <SectionItems>
        <li><Degrees/></li>
        <li><Teaching/></li>
        <li><Research/></li>
        <li><Coursework/></li>
    </SectionItems>
</SectionContainer>