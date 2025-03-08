<script lang="ts">

    let { 
        occupation, 
        highlight = $bindable(false) 
    }: { 
        occupation: string, 
        highlight?: boolean 
    } = $props();

</script>

<span class={highlight ? 'highlighted' : ''}>
    {occupation}
</span>

<style>
    span {

        font-size: var(
            --occupation-font-size, 
            1.2rem
        );

        font-weight: var(
            --occupation-font-weight, 
            500
        );
        
        color: var(
            --occupation-color, 
            var(--text-brand)
        );
    }

    span.highlighted {
        color: var(
            --occupation-highlight-color, 
            var(--text-contrast)
        );
    }
</style>