<script lang="ts">
    import Tooltip from "$lib/ui/utils/Tooltip.svelte";
    import { Download } from "lucide-svelte";

    const download_file = () => {
        const file_path = '/colby_anderson.cv.pdf';
        const link = document.createElement('a');
        link.href = file_path;
        link.download = 'colby_anderson.cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
</script>

{#snippet content()}
    <button onclick={download_file}>
        Download PDF
        <Download size={18} />
    </button>
{/snippet}

<Tooltip text="Download a PDF version of this CV" {content} position="below"/>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    button {
        color: var(--text-brand);
        font-size: var(--font-size-medium);
        font-weight: var(--font-weight-bold);
        text-decoration: none;
        padding: 0 0.5rem;
        background: none;
        border: none;
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        @include screens.mobile {
            display: none;
        }
    }

    button:hover {
        color: var(--text-neutral-hovered);
    }
</style>