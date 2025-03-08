<script lang="ts">

    import Timestamp from '$lib/ui/utils/role/heading/Timestamp.svelte';
    import Occupation from '$lib/ui/utils/role/heading/Occupation.svelte';

    import { type Course } from '$lib/info';

    let { 
        course 
    }: { 
        course: Course 
    } = $props();

</script>

<h3>
    <Timestamp 
        timestamp={course.date}
        highlight={false}
        --timestamp-color={"var(--text-neutral)"}
        --timestamp-font-size={"1rem"}
    />
    <Occupation 
        occupation={course.title}
        highlight={false}
        --occupation-color={"var(--text-neutral)"}
        --occupation-font-size={"1rem"}
        --occupation-font-weight={"400"}
    />
</h3>

<style>
    h3 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0px;

        @media (max-width: 700px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>