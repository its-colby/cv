<script lang="ts">
    import PDF from './PDF.svelte';
    import Contact from './Contact.svelte';
</script>

<nav aria-label="Main navigation">
    <ul>
        <li><PDF/></li>
        <li><Contact/></li>
    </ul>
</nav>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 0;
        padding: 0;

        @include screens.mobile {
            gap: 0;
        }
    }
</style>