<script lang="ts">

    import Timestamp from '$lib/ui/utils/role/heading/Timestamp.svelte';
    import Occupation from '$lib/ui/utils/role/heading/Occupation.svelte';

    import { ResearchRole, TeachingRole } from '$lib/cv';

    let { 
        role, 
        highlight 
    }: { 
        role: TeachingRole | ResearchRole, 
        highlight: boolean 
    } = $props();

</script>

<h3>
    <Timestamp 
        timestamp={role.date}
        highlight={highlight}
        style_class={"academia"}
    />
    <Occupation 
        occupation={role.title}
        highlight={highlight}
        style_class={"academia"}
    />
</h3>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    h3 {
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