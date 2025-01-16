<script lang="ts" module>
    import { type AnyRole, type Role as ResearchRole, type TeachingRole, type IndustryRole, RoleType } from '$lib/info';
    export { details };
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


{#snippet teaching_details(details: TeachingRole)}
        {@render paragraphs(details.contributions)}
        {@render header("Course Topics")}
        <p>{details.topics}</p>
{/snippet}


{#snippet research_details(details: ResearchRole)}
        {@render paragraphs(details.contributions)}
{/snippet}


{#snippet industry_details(details: IndustryRole)}
        {@render contract_and_duration(details.commitment, details.duration)}
        {@render header("Responsibilities")}
        <p>{details.responsibilities}</p>
        {@render header("Impact")}
        <p>{details.impact}</p>
        {@render header("Notable Contributions")}
        {@render paragraphs(details.contributions)}
{/snippet}


{#snippet details(details: AnyRole)}
    <div class="details-container">
        {#if details.kind === RoleType.TEACHING}
            {@render teaching_details(details)}
        {:else if details.kind === RoleType.INDUSTRY}
            {@render industry_details(details)}
        {:else if details.kind === RoleType.RESEARCH}
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