<script lang="ts">
    let { title }: { title: string } = $props();
</script>

<h1>{title}</h1>

<style lang="scss">
    @use '$lib/theme/fonts.scss';

    h1 {
        @extend %base-font;
        color: var(--text-brand);

        margin: 0;
    }
</style>