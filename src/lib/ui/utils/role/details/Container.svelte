<script lang="ts">

    let { 
        children 
    }: { 
        children: any 
    } = $props();

</script>

<div>
    {@render children()}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;

        gap: 10px;

        padding-left: 2rem;
        padding-right: 2rem;

        @media (max-width: 700px) {
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>
