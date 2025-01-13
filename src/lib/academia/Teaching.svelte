<script lang="ts">
    import TARole from '$lib/academia/TARole.svelte';

    const teaching_items = [
        { year: '2024 Spring', title: 'Applied Cryptography', bullets: ['Hello from Cryptography', 'Hello from Cryptography'] },
        { year: '2023 Spring', title: 'The Basics of Cryptographic Systems', bullets: ['Hello from Crypto Systems'] },
        { year: '2021 Fall', title: 'Deep Learning', bullets: ['Hello from Deep Learning'] },
        { year: '2021 Summer', title: 'Blockchains & Cryptocurrencies', bullets: ['Hello from Deep Learning'] },
        { year: '2021 Spring', title: 'Modern Web and Mobile Applications', bullets: ['Hello from Web Dev'] }
];
</script>

<h2>Teaching</h2>
<ul>
    {#each teaching_items as item}
        <li>
            <TARole year={item.year} title={item.title} bullets={item.bullets}/>
        </li>
    {/each}
</ul>

<style>
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

    h2 {
        font-size: 20px;
        font-weight: 500;
        color: var(--text-neutral-color);
        margin: 0px;
        margin-bottom: 10px;
    }
</style>