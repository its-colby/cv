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
            style_class={"industry"}
        />
        <Institution 
            institution={industry_role.company}
            highlight={highlight}
        />
    </div>
    <h2>
        <Occupation 
            occupation={industry_role.title}
            highlight={highlight}
            style_class={"industry"}
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
    }

    h2 {
        margin: 0;
    }
    
</style>
