<script lang="ts">
    import SubsectionContainer from "$lib/ui/utils/section/SubsectionContainer.svelte";
    import SubsectionHeading from "$lib/ui/utils/section/Subheading.svelte";
</script>

<SubsectionContainer>
    <div class="container">

        <span class="label">
            <SubsectionHeading 
                title="Degree" 
                highlight={false} 
            />
        </span>

        <div class="degree-container">
            <span class="degree-title">
                A.B. Computer Science
            </span>
        
            <span class="degree-school">
                Brown University
            </span>
        </div>

    </div>
</SubsectionContainer>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    div.container {
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

    div.degree-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
    }

    span {
        font-weight: 400;
        font-size: 1.1rem;
        color: var(--text-neutral);
    }

    span.label {
        width: 10.8rem;
    }
    
</style>