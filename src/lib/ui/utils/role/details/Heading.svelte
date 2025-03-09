<script lang="ts">

    let { 
        title 
    }: { 
        title: string 
    } = $props();

</script>

<h1>{title}</h1>

<style>
    h1 {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-brand);

        margin: 0;
    }
</style>