<script lang="ts">
    let { children }: { children: any } = $props();
</script>

<section>
    {@render children()}
</section>

<style lang="scss">
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/spacing.scss';

    section {
        display: flex;
        flex-direction: column;

        gap: 0.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;

        @include screens.desktop {
            padding-left: spacing.$indent;
            padding-right: spacing.$indent;
        }

        @include screens.mobile {
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>
