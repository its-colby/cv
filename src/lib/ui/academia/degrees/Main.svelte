<script lang="ts">
    import SubsectionContainer from "$lib/ui/utils/section/SubsectionContainer.svelte";
    import SubsectionHeading from "$lib/ui/utils/section/Subheading.svelte";
</script>

<SubsectionContainer>
    <article>

        <header>
            <SubsectionHeading 
                title="Degrees" 
                highlight={false} 
            />
        </header>

        <div>
            <dl>
                <dt>A.B. Computer Science</dt>
                <dd>Brown University</dd>
            </dl>
            <dl>
                <dt class="foo">
                    <span>M.S. Computer Science</span>
                    <span>(in progress)</span>
                </dt>
                <dd>Brown University</dd>
            </dl>
        </div>

    </article>
</SubsectionContainer>

<style lang="scss">
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/fonts.scss';

    dt.foo {
        display: flex;
        flex-direction: column;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    article {
        display: flex;

        @include screens.desktop {
            flex-direction: row;
            align-items: flex-start;
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
        align-items: flex-start;
        gap: 2rem;
    }

    dt {
        flex: 1;
    }

    dt, dd {
        font-weight: var(--font-weight-base);
        font-size: var(--font-size-medium);
        color: var(--text-neutral);
        margin: 0;
    }

    header {
        width: 9.5rem;
    }
    
</style>