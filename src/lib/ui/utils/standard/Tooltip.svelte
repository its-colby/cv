<script lang="ts" generics="T">
    import type { Snippet } from 'svelte';

    interface Props {
        text: string;
        data?: T | undefined;
        content: Snippet<[T | undefined]>;
        position?: "above" | "below";
    }

    let { text = "", data = undefined, content, position = "above" } : Props = $props();

    const has_hover = typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : false;

    let tooltipElement: HTMLElement;
    let tooltipTextElement: HTMLElement;

    function adjustPosition() {
        if (!tooltipElement || !tooltipTextElement) return;
        
        const bounds = tooltipElement.getBoundingClientRect();
        const tooltipBounds = tooltipTextElement.getBoundingClientRect();
        const viewport = window.innerWidth;
        
        // Reset transform and left position
        tooltipTextElement.style.transform = 'translateX(-50%)';
        tooltipTextElement.style.left = '50%';
        
        // Recalculate bounds after reset
        const updatedBounds = tooltipTextElement.getBoundingClientRect();
        
        // Check if tooltip goes beyond right edge
        if (updatedBounds.right > viewport) {
            const overflow = updatedBounds.right - viewport;
            tooltipTextElement.style.transform = `translateX(calc(-50% - ${overflow}px - 8px))`;
        }
        // Check if tooltip goes beyond left edge
        else if (updatedBounds.left < 0) {
            tooltipTextElement.style.transform = `translateX(calc(-50% - ${updatedBounds.left}px + 8px))`;
        }
    }
</script>

<div class="tooltip" 
    class:no-hover={!has_hover}
    bind:this={tooltipElement} 
    role="button"
    tabindex="0"
    onmouseenter={adjustPosition}>
    {@render content(data)}
    <div class="tooltip-text {position}" bind:this={tooltipTextElement}>{text}</div>
</div>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .tooltip-text {
        position: absolute;
        /* bottom: calc(100% + 8px); */
        left: 50%;
        transform: translateX(-50%);
        background: var(--card-contrast-background);
        color: var(--text-anti-contrast);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.1s ease;
        z-index: 1001;
    }

    .tooltip-text.above {
        bottom: 125%; /* Position the tooltip above the text */
    }

    .tooltip-text.below {
        top: 125%; /* Position the tooltip below the text */
    }

    .tooltip:hover .tooltip-text {
        opacity: 1;
    }

    .no-hover .tooltip-text {
        display: none;
    }

    @media (hover: none) {
        .tooltip-text {
            display: none;
        }
    }
</style>
