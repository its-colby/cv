<script lang="ts">

    import SectionContainer from "$lib/ui/utils/section/SectionContainer.svelte";
    import SectionHeading from "$lib/ui/utils/section/Heading.svelte";

    import Degrees from "./degrees/Main.svelte";
    import Teaching from "./teaching/Main.svelte";
    import Research from "./research/Main.svelte";
    import Coursework from "./coursework/Main.svelte";
</script>

<SectionContainer>
    <SectionHeading title="Academia" />
    <ul>
        <li><Degrees/></li>
        <li><Teaching/></li>
        <li><Research/></li>
        <li><Coursework/></li>
    </ul>
</SectionContainer>

<style>
    ul {
        display: flex;
        flex-direction: column;

        list-style: none;

        gap: 1.5rem;
        padding: 0;
        padding-top: 1rem;
    }
</style>