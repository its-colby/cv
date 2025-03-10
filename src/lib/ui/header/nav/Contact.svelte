<script lang="ts">
    import Tooltip from '$lib/ui/utils/standard/Tooltip.svelte';
    import { Copy } from 'lucide-svelte';
    import { fade } from 'svelte/transition';

    const email = 'itscolbya@gmail.com';
    let just_copied = $state(false);

    function copy_email() {
        navigator.clipboard.writeText(email);
        just_copied = true;
        setTimeout(() => {
            just_copied = false;
        }, 1000);
    }

</script>

{#snippet content()}
    <button onclick={copy_email}>
        {email}
        <Copy size={18} />
        {#if just_copied}
        <div class="copied-text" transition:fade={{ duration: 1 }}>
            Copied to clipboard!
        </div>
    {/if}
    </button>
    
{/snippet}

<Tooltip text="Copy email to clipboard" {content} position="below"/>


<style>
    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-neutral);
        font-size: var(--font-size-medium);
        font-weight: var(--font-weight-bold);
        padding: 0 0.5rem;
    }

    button:hover {
        color: var(--text-neutral-hovered);
    }

    .copied-text {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.8rem;
        margin-top: 2rem;
    }
</style>