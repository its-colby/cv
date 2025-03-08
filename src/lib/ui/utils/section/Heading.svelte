<script lang="ts">
    let { title }: { title: string } = $props();
</script>

<h1>{title}</h1>

<style>
    h1 {
        text-align: center;

        font-size: 2rem;
        font-weight: 500;

        color: var(--text-neutral);

        margin: 0;
    }
</style>