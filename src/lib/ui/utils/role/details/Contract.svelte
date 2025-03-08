<script lang="ts">
    
    let { 
        contract, 
        duration 
    }: { 
        contract: string, 
        duration: string 
    } = $props();

</script>

<h4>
    <span>{contract}</span>
    <span>{duration}</span>
</h4>

<style>
    h4 {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        font-size: 1rem;
        font-weight: 400;
        color: var(--text-brand);

        margin: 0px;
    }
</style>