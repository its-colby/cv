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
        font-size: var(--font-size-medium);
        font-weight: var(--font-weight-base);
        color: var(--text-neutral);

        width: 10.3rem;
    }

    span.highlighted {
        color: var(--text-contrast);
    }
</style>