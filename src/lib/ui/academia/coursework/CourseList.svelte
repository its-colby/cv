<script lang="ts">

    import Course from './Course.svelte';

    import { courses } from '$lib/cv';

</script>

<ul>
    {#each courses as course}
        <li>
            <Course course={course} />
        </li>
    {/each}
</ul>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    ul {
        display: flex;
        flex-direction: column;

        padding-top: 1rem;
        
        margin: 0;

        list-style: none;

        @include screens.desktop {
            padding-left: 2.5rem;
            gap: 0.5rem;
        }

        @include screens.mobile {
            padding-left: 0px;
            gap: 0.8rem;
        }
    }
</style>