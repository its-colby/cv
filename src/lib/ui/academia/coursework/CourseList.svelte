<script lang="ts">

    import Course from './Course.svelte';

    import { courses } from '$lib/info';

</script>

<ul>
    {#each courses as course}
        <li>
            <Course course={course} />
        </li>
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;

        gap: 0.5rem;
        padding-top: 1rem;
        padding-left: 2.5rem;
        margin: 0;

        list-style: none;

        @media (max-width: 700px) {
            padding-left: 0px;
            gap: 0.8rem;
        }
    }
</style>