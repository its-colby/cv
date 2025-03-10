<script lang="ts">

    let { 
        timestamp, 
        highlight = $bindable(false),
        style_class
    }: { 
        timestamp: string, 
        highlight?: boolean,
        style_class: "course" | "industry" | "academia" 
    } = $props();

</script>

<time class:highlighted={highlight} class={style_class}>
    {timestamp}
</time>

<style>
    time {
        font-weight: var(--font-weight-base);
        color: var(--text-neutral);
    }

    time.course {
        font-size: var(--font-size-regular);
        width: 8.3rem;
    }

    time.academia {
        font-size:var(--font-size-medium);
        width: 8.3rem;
    }

    time.industry {
        font-size:var(--font-size-medium);
        width: 7.5rem;
    }

    time.highlighted {
        color: var(--text-contrast);
    }
</style>