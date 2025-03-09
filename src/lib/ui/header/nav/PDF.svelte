<script lang="ts">
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

<button onclick={download_file}>
    Download PDF
</button>

<style>
    button {
        color: var(--text-neutral);
        font-weight: 500;
        font-size: 18px;
        text-decoration: none;
        margin: 0 10px;
        background: none;
        border: none;
        cursor: pointer;
    }

    button:hover {
        color: var(--text-neutral-hovered);
    }
</style>