<script lang="ts">
    let { title }: { title: string } = $props();
</script>

<h1>{title}</h1>

<style lang="scss">
    @use '$lib/theme/fonts.scss';

    h1 {
        text-align: center;

        @extend %large-font;

        color: var(--text-neutral);

        margin: 0;
    }
</style>