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
    
    // Check if device supports hover, safely handling SSR
    const has_hover = typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : false;
    
    function toggle(event: Event) { 
        event.preventDefault();
        open = !open;
        if (detailsElement) detailsElement.open = open;
    }

    function handle_mouse_enter() {
        if (has_hover) hovered = true;
    }

    function handle_mouse_leave() {
        if (has_hover) hovered = false;
    }
</script>


<details bind:this={detailsElement}>

    <summary 
        onclick={toggle}
        onmouseenter={handle_mouse_enter}
        onmouseleave={handle_mouse_leave}
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

    @media (hover: hover) {
        summary:hover {
            color: var(--chevron-color-hovered);
        }
    }

    summary::-webkit-details-marker {
        display: none;
    }
</style>