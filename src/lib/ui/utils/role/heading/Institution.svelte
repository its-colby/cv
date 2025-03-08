<script lang="ts">

    let { 
        institution, 
        highlight = $bindable(false) 
    }: { 
        institution: string, 
        highlight?: boolean 
    } = $props();
    
</script>

<span class={highlight ? 'highlighted' : ''}>
    {institution}
</span>

<style>
    span {

        font-size: var(
            --occupation-font-size, 
            1.1rem
        );

        font-weight: var(
            --occupation-font-weight, 
            400
        );
        
        color: var(
            --occupation-color, 
            var(--text-neutral)
        );

        width: var(
            --institution-width, 
            150px
        );
    }

    span.highlighted {
        color: var(
            --occupation-highlight-color, 
            var(--text-contrast)
        );
    }
</style>