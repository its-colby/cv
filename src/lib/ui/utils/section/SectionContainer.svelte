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

<style lang="scss">
    @use '$lib/theme/spacing.scss';
    @use "sass:map";

    section {
        flex: 1;
        box-sizing: border-box; 
                
        padding-left: spacing.$indent;
        padding-right: spacing.$indent;
        padding-top: 2rem;
        padding-bottom: 2rem;
        
        border-radius: 0.66rem;

        background-color: var(--card-a-background);
    }
</style>