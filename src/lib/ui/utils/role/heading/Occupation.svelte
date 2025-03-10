<script lang="ts">

    let { 
        occupation, 
        style_class,
        highlight = $bindable(false) 
    }: { 
        occupation: string, 
        style_class: "course" | "industry" | "academia",
        highlight?: boolean 
    } = $props();

</script>

<span class:highlighted={highlight} class={style_class}>
    {occupation}
</span>

<style lang="scss">
    @use '$lib/theme/fonts.scss';

    span.course {
        @extend %base-font;
        color: var(--text-neutral);
    }

    span.industry, span.academia {
        font-size: var(--font-size-medium);
        font-weight: var(--font-weight-bold);
        color: var(--text-brand);
    }

    span.highlighted {
        color: var(--text-contrast);
    }
</style>