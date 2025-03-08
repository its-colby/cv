<script lang="ts">

    let {
        children
    }: {
        children: any
    } = $props();

</script>

<section>
    {@render children()}
</section>

<style>
    section {
        flex: 1;
        box-sizing: border-box; 
                
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        
        border-radius: 12px;

        background-color: var(--card-a-background);
    }
</style>