<script lang="ts">

    import Timestamp from '$lib/ui/utils/role/heading/Timestamp.svelte';
    import Occupation from '$lib/ui/utils/role/heading/Occupation.svelte';

    import { Course } from '$lib/cv';

    let { course }: { course: Course } = $props();

</script>

<article>
    <header>
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
    </header>
</article>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    header {
        display: flex;
        margin: 0;

        @include screens.desktop {
            flex-direction: row;
            align-items: center;
        }

        @include screens.mobile {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>