<div>
    <h1>Curriculum Vitae</h1>
</div>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    h1 {
        position: static;
        transform: none;
        font-size: var(--font-size-medium);
        font-weight: var(--font-weight-bold);
        color: var(--text-neutral);
        margin: 0;
    }

    div {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        
        @include screens.mobile {
            display: none;
        }
    }
</style>