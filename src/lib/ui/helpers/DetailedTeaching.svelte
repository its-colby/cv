<script lang="ts">
    let { topics, bullets }: { topics: string, bullets: string[] } = $props();
</script>

<div>
    <ul>
        {#each bullets as bullet}
            <li><span>{bullet}</span></li>
        {/each}
    </ul>
    <h4>Course Topics</h4>
    <p>{topics}</p>
</div>

<style>

    div {
        padding-left: 30px;
        padding-right: 45px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 10px;
        margin-bottom: 10px;

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