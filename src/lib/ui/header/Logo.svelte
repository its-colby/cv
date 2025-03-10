<script lang="ts">

</script>

<h2>
    <span class="desktop">Colby's Curriculum Vitae</span>
    <span class="mobile">Colby's CV</span>
</h2>

<style lang="scss">
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/fonts.scss';
    
    h2 {
        @extend %kinda-large-font;
        color: var(--text-neutral);

        @include screens.mobile {
            // position: absolute;
            // left: 50%;
            // transform: translateX(-50%);
            margin: 0;

            .desktop {
                display: none;
            }
        }

        @include screens.desktop {
            .mobile {
                display: none;
            }
        }
    }
</style>