<script lang="ts">
    import SubsectionContainer from "$lib/ui/utils/section/SubsectionContainer.svelte";
    import SubsectionHeading from "$lib/ui/utils/section/Subheading.svelte";
</script>

<SubsectionContainer>
    <article>

        <header>
            <SubsectionHeading 
                title="Degree" 
                highlight={false} 
            />
        </header>

        <dl>
            <dt>A.B. Computer Science</dt>
            <dd>Brown University</dd>
        </dl>

    </article>
</SubsectionContainer>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    article {
        display: flex;

        @include screens.desktop {
            flex-direction: row;
            align-items: center;
            gap: 0;
        }

        @include screens.mobile {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
    }

    dl {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
    }

    dt, dd {
        font-weight: 400;
        font-size: 1.1rem;
        color: var(--text-neutral);
        margin: 0;
    }

    header {
        width: 10.8rem;
    }
    
</style>