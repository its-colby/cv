<script lang="ts">

    let { 
        title 
    }: { 
        title: string 
    } = $props();

</script>

<h4>{title}</h4>

<style>
    h4 {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-brand);

        margin: 0;
    }
</style>