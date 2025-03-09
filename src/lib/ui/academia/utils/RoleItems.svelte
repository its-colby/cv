<script lang="ts">
    let {
        children
    }: {
        children: any
    } = $props();
</script>

<ul>
    {@render children()}
</ul>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    ul {
        display: flex;
        flex-direction: column;

        list-style: none;

        gap: 1rem;
        padding-top: 1rem;
        margin: 0;

        @include screens.desktop {
            padding-left: 2.5rem;
        }

        @include screens.mobile {
            padding-left: 0;
        }
    }
</style>