<script lang="ts">

    import { IndustryRole } from '$lib/cv';

    import Timestamp from '$lib/ui/utils/role/heading/Timestamp.svelte';
    import Occupation from '$lib/ui/utils/role/heading/Occupation.svelte';
    import Institution from '$lib/ui/utils/role/heading/Institution.svelte';

    let { 
        industry_role,
        highlight = $bindable(false)
    }: { 
        industry_role: IndustryRole,
        highlight?: boolean
    } = $props();

</script>


<header>
    <div>
        <Timestamp 
            timestamp={industry_role.date}
            highlight={highlight}
            --timestamp-width={"7.5rem"}
        />
        <Institution 
            institution={industry_role.company}
            highlight={highlight}
            --institution-width={"10.3rem"}
        />
    </div>
    <h2>
        <Occupation 
            occupation={industry_role.title}
            highlight={highlight}
        />
    </h2>
</header>

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

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 0;
    }

    h2 {
        margin: 0;
    }
    
</style>
