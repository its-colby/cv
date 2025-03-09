<script lang="ts">

    import Dropdown from '$lib/ui/utils/standard/Dropdown.svelte';
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

{#snippet contact_nav()}
    <span>Contact</span>
{/snippet}

{#snippet email_dropdown()}
<div class="email-dropdown">
    <span>{email}</span>
    <Copy size={18} />
    {#if just_copied}
        <div class="copied-text" transition:fade={{ duration: 1 }}>
            Copied to clipboard!
        </div>
    {/if}
</div>
{/snippet}

<Dropdown
    on_click={copy_email}
    header={contact_nav}
    row={email_dropdown}
/>


<style>
    .email-dropdown {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--text-neutral-color);
    }

    .email-dropdown:hover {
        color: var(--text-neutral-color-hovered);
    }

    .email-dropdown span {
        font-size: 16px;
        font-weight: 400;
    }

    .copied-text {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--header-background-color);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 14px;
        margin-top: 4px;
    }

    span {
        color: var(--text-neutral);
        font-weight: 500;
        font-size: 18px;
        text-decoration: none;
        margin: 0 10px;
    }

    span:hover {
        color: var(--text-neutral-hovered);
    }
</style>