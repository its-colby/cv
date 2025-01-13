<script lang="ts">
    import ColorThemeToggle from '$lib/utils/ColorThemeToggle.svelte';
    import { active_color_themes } from '$lib/theme/active.svelte';
    import Dropdown from '$lib/utils/Dropdown.svelte';
    import { Copy } from 'lucide-svelte';
    import { fade } from 'svelte/transition';

    let email = 'itscolbya@gmail.com';
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
    <a href="/">Contact</a>
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

<header>
    <h2>Colby Anderson</h2>
    <h1>Curriculum Vitae</h1>
    <div>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="https://writings.itscolby.com">Writings</a></li>
                <li>
                    <Dropdown
                        on_click={copy_email}
                        header={contact_nav}
                        row={email_dropdown}
                    />
                </li>
            </ul>
        </nav>
        <ColorThemeToggle size={25} color_themes={active_color_themes}/>
    </div>
</header>


<style>
    header {
        background-color: var(--header-background-color);
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 40px;
        top: 0;
        position: sticky;
        z-index: 100;
    }

    a {
        color: var(--text-neutral-color);
        font-weight: 500;
        font-size: 18px;
        text-decoration: none;
        margin: 0 10px;
    }

    a:hover {
        color: var(--text-neutral-color-hovered);
    }

    header nav ul {
        list-style-type: none;
        display: flex;
        align-items: center;
    }

    header div {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    header h1 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
        font-weight: 500;
        color: var(--text-contrast-color);
    }

    header h2 {
        font-size: 18px;
        font-weight: 500;
        color: var(--text-contrast-color);
    }

    header .email-dropdown {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--text-neutral-color);
    }

    header .email-dropdown:hover {
        color: var(--text-neutral-color-hovered);
    }

    header .email-dropdown span {
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
</style>