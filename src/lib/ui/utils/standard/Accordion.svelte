<script lang="ts" generics="HdrDataType, DetailsDataType">
    import type { Snippet } from "svelte";
    import { ChevronDown, ChevronUp } from 'lucide-svelte';

    let { 
        header,
        header_data,
        details,
        details_data
    }: { 
        header: Snippet<[HdrDataType, boolean]>, 
        header_data: HdrDataType,
        details: Snippet<[DetailsDataType]>,
        details_data: DetailsDataType
    } = $props();


    let open: boolean = $state(false);
    let hovered: boolean = $state(false);
    let detailsElement: HTMLDetailsElement;
    
    function toggle(event: Event) { 
        event.preventDefault();
        open = !open;
        if (detailsElement) detailsElement.open = open;
    }
</script>


<details bind:this={detailsElement}>

    <summary 
        onclick={toggle}
        onmouseenter={() => hovered = true}
        onmouseleave={() => hovered = false}
    >
        {@render header(header_data, hovered)}
        {#if open}
            <ChevronUp size={24} />
        {:else}
            <ChevronDown size={24} />
        {/if}
    </summary>
    
    <div>{@render details(details_data)}</div>

</details>


<style>
    summary {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;

        color: var(--chevron-color);
    }

    summary:hover {
        color: var(--chevron-color-hovered);
    }

    summary::-webkit-details-marker {
        display: none;
    }
</style>