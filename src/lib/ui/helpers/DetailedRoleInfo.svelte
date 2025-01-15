<script lang="ts">
    let { contract, length, responsibilities, impact, contributions }: { contract: string, length: string, responsibilities: string, impact: string, contributions: string[] } = $props();
</script>

<div>
    <h4 class="time-contract"><span>{contract}</span><span>{length}</span></h4>
    <h4>Responsibilities</h4>
    <p>{responsibilities}</p>
    <h4>Impact</h4>
    <p>{impact}</p>
    <h4>Notable Contributions</h4>
    <ul>
        {#each contributions as contribution}
            <li><span>{contribution}</span></li>
        {/each}
    </ul>
</div>

<style>

    div {
        padding-left: 30px;
        padding-right: 45px;
    }

    .time-contract {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-bottom: 10px;
    }

    .time-contract span {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-brand-color2);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 10px;

        list-style: none;

        padding-left: 0px;
    }

    li {
        display: flex;
    }

    /* li::before {
        content: "•";
        flex-shrink: 0;
        margin-right: 0.5rem;
        font-size: 18px;
        color: var(--text-neutral-color);
    } */

    li span {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
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
        margin: 10px 0px;
    }
</style>