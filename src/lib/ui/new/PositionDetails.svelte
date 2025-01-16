<script lang="ts" module>
    export { details };

    interface Base {
        kind: 'teaching' | 'research' | 'industry';
        info: string[];
    }

    export interface TeachingDetails extends Base {
        kind: 'teaching';
        topics: string;
    };

    export interface ResearchDetails extends Base {
        kind: 'research';
    };

    export interface IndustryDetails extends Omit<Base, 'info'> {
        kind: 'industry';
        contract: string;
        duration: string;
        responsibilities: string;
        impact: string;
        contributions: string[];
    };
</script>


{#snippet header(title: string)}
    <h4>{title}</h4>
{/snippet}


{#snippet contract_and_duration(contract: string, duration: string)}
    <h4 class="contract-duration-container">
        <span>{contract}</span>
        <span>{duration}</span>
    </h4>
{/snippet}


{#snippet paragraphs(paragraphs: string[])}
    <div class="paragraphs-container">
        {#each paragraphs as paragraph}
            <p>{paragraph}</p>
        {/each}
    </div>
{/snippet}


{#snippet teaching_details(details: TeachingDetails)}
        {@render paragraphs(details.info)}
        {@render header("Course Topics")}
        <p>{details.topics}</p>
{/snippet}


{#snippet research_details(details: ResearchDetails)}
        {@render paragraphs(details.info)}
{/snippet}


{#snippet industry_details(details: IndustryDetails)}
        {@render contract_and_duration(details.contract, details.duration)}
        {@render header("Responsibilities")}
        <p>{details.responsibilities}</p>
        {@render header("Impact")}
        <p>{details.impact}</p>
        {@render header("Notable Contributions")}
        {@render paragraphs(details.contributions)}
{/snippet}


{#snippet details(details: TeachingDetails | ResearchDetails | IndustryDetails)}
    <div class="details-container">
        {#if details.kind === 'teaching'}
            {@render teaching_details(details)}
        {:else if details.kind === 'industry'}
            {@render industry_details(details)}
        {:else if details.kind === 'research'}
            {@render research_details(details)}
        {/if}
    </div>
{/snippet}


<style>

    div {
        display: flex;
        flex-direction: column;

        gap: 10px;
    }

    div.details-container {

        padding-left: 30px;
        padding-right: 45px;
    }

    h4.contract-duration-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    h4 {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-brand-color2);
        margin: 0px;
    }

    p {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
        margin: 0px;
    }
</style>