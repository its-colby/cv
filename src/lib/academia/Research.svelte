<script lang="ts">
    import ResearchRole from '$lib/academia/RARoles.svelte';

    const researching_items = [
        { year: '2023 Spring', title: 'Optimizing Partially Blind Signatures', bullets: ['Hello from Cryptography'] },
        { year: '2022 Fall', title: 'Slippage in Automated Market Makers', bullets: ['Hello from Crypto Systems'] },
        { year: '2021 Spring', title: 'Stack Canaries in Multithreaded Programs', bullets: ['Hello from Deep Learning'] },
        { year: '2021', title: 'Distributed Sorting with Big Data', bullets: ['Hello from Deep Learning'] },
];
</script>

<h2>Research</h2>
<ul>
    {#each researching_items as item}
        <li>
            <ResearchRole year={item.year} title={item.title} bullets={item.bullets}/>
        </li>
    {/each}
</ul>

<style>
    h2 {
        font-size: 20px;
        font-weight: 500;
        color: var(--text-neutral-color);
        margin: 0px;
        margin-bottom: 10px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: none;
        padding-left: 40px;
        margin: 0;
    }

    li {
        width: 100%;
    }
</style>