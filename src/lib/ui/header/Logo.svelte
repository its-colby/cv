<script lang="ts">

</script>

<h2>Colby Anderson</h2>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    h2 {
        font-size: 18px;
        font-weight: 500;
        color: var(--text-neutral);

        @include screens.mobile {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
        }
    }
</style>