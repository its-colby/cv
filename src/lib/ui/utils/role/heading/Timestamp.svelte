<script lang="ts">

    let { 
        timestamp, 
        highlight = $bindable(false) 
    }: { 
        timestamp: string, 
        highlight?: boolean 
    } = $props();

</script>

<time class={highlight ? 'highlighted' : ''}>
    {timestamp}
</time>

<style>
    time {
        font-size: var(
            --timestamp-font-size, 
            1.1rem
        );

        font-weight: var(
            --timestamp-font-weight, 
            400
        );

        color: var(
            --timestamp-color, 
            var(--text-neutral)
        );

        width: var(
            --timestamp-width, 
            8.3rem
        );
    }

    time.highlighted {
        color: var(
            --timestamp-highlight-color, 
            var(--text-contrast)
        );
    }
</style>