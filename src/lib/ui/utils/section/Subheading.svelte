<script lang="ts">

    let { 
        title,
        highlight
    }: { 
        title: string,
        highlight: boolean
    } = $props();

</script>

<h2
    class={highlight ? 'highlight' : ''}
>
    {title}
</h2>

<style lang="scss">
    @use '$lib/theme/fonts.scss';

    h2 {
        @extend %kinda-large-font;
        color: var(--text-neutral);
        margin: 0;
    }

    .highlight {
        color: var(--text-contrast);
    }
</style>