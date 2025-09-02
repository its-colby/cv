<script lang="ts">
    
    let { 
        contract, 
        duration 
    }: { 
        contract: string, 
        duration: string 
    } = $props();

</script>

<header>
    <span>{contract}</span>
    <span>{duration}</span>
</header>

<style lang="scss">
    @use '$lib/theme/fonts.scss';
    @use '$lib/theme/spacing.scss';

    
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        @extend %base-font;
        color: var(--text-brand);

        margin: 0;
    }
</style>