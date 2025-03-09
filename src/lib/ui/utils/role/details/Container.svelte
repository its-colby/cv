<script lang="ts">

    let { 
        children 
    }: { 
        children: any 
    } = $props();

</script>

<div>
    {@render children()}
</div>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    div {
        display: flex;
        flex-direction: column;

        gap: 10px;

        @include screens.desktop {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        @include screens.mobile {
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>
