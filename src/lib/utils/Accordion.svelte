<script lang="ts">
    import type { Snippet } from "svelte";
    import { ChevronDown, ChevronUp } from 'lucide-svelte';

    let { title, content }: { title: Snippet; content: Snippet } = $props();
    let open: boolean = $state(false);
    let detailsElement: HTMLDetailsElement;
    
    function toggle(event: Event) { 
        event.preventDefault();
        open = !open;
        if (detailsElement) detailsElement.open = open;
    }
</script>


<details bind:this={detailsElement}>

    <summary onclick={toggle}>
        {@render title()}
        {#if open}
            <ChevronUp size={24} />
        {:else}
            <ChevronDown size={24} />
        {/if}
    </summary>
    
    <div>{@render content()}</div>

</details>


<style>
    summary {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;

        color: var(--button-color);
        
        transition: 0.4s;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    summary:hover {
        color: var(--button-color-hovered);
    }

    div {
        margin-top: 15px;
        margin-bottom: 10px;
    }
</style>