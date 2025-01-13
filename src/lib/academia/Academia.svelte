<script lang="ts">
    import Teaching from "./Teaching.svelte";
    import Accordion from "$lib/utils/Accordion.svelte";
    import Research from "./Research.svelte";
    import Coursework from "./Coursework.svelte";
</script>

<ul>
    <li><h1>Academia</h1></li>
    <li><Teaching/></li>
    <li><Research/></li>
    <li><Accordion title={title} content={content}
    --button-color='var(--text-neutral-color)'
        --button-color-hovered='var(--text-neutral-color-hovered)'
    /></li>
</ul>

{#snippet title()}
    <h2 class="accordion-title">Coursework</h2>
{/snippet}

{#snippet content()}
    <Coursework/>
{/snippet}

<style>
    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: none;
        padding: 0px;
    }

    li {
        padding: 5px 0px;
    }

    h1 {
        font-size: 30px;
        font-weight: 500;
        color: var(--text-neutral-color);
        text-align: center;
        margin: 0px;
    }

    h2 {
        font-size: 20px;
        font-weight: 500;
        color: var(--text-neutral-color);
        margin: 0px;
    }
</style>