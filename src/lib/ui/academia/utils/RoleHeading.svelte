<script lang="ts">

    import Timestamp from '$lib/ui/utils/role/heading/Timestamp.svelte';
    import Occupation from '$lib/ui/utils/role/heading/Occupation.svelte';

    import { type ResearchRole, type TeachingRole } from '$lib/info';

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
        --timestamp-color={"var(--text-neutral)"}
    />
    <Occupation 
        occupation={role.title}
        highlight={highlight}
        --occupation-color={"var(--text-brand)"}
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