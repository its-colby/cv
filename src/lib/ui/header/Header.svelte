<script lang="ts">
    import ColorThemeToggle from '$lib/ui/utils/standard/ColorThemeToggle.svelte';
    import Dropdown from '$lib/ui/utils/standard/Dropdown.svelte';
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

    const download_file = () => {
        const filePath = '/colby_anderson.cv.pdf'; // Adjust the path based on your file's location in the `static` folder
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'colby_anderson.cv.pdf'; // This specifies the download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the DOM
    };
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

<header>
    <h2 class="name">Colby Anderson</h2>
    <div class="title-container">
        <h1>Curriculum Vitae</h1>
    </div>
    <div class="controls">
        <nav aria-label="Main navigation">
            <ul>
                <li>
                    <button onclick={download_file}>
                        Download PDF
                    </button>
                </li>
                <li>
                    <Dropdown
                        on_click={copy_email}
                        header={contact_nav}
                        row={email_dropdown}
                    />
                </li>
            </ul>
        </nav>
        <ColorThemeToggle size={25}/>
    </div>
</header>


<style>
    header {
        background-color: var(--header-background);
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 40px;
        top: 0;
        position: sticky;
        z-index: 100;
    }

    span, button {
        color: var(--text-neutral);
        font-weight: 500;
        font-size: 18px;
        text-decoration: none;
        margin: 0 10px;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    span:hover, button:hover {
        color: var(--text-neutral-hovered);
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
        position: static;
        transform: none;
        font-size: 20px;
        font-weight: 500;
        color: var(--text-neutral);
        margin: 0;
    }

    header h2 {
        font-size: 18px;
        font-weight: 500;
        color: var(--text-neutral);
    }

    @media (max-width: 700px) {
        header {
            position: relative;
        }

        header .name {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
        }

        header .title-container,
        header nav {
            display: none;
        }

        header .controls {
            margin-left: auto;
            gap: 0;
        }
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

    .title-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }
</style>