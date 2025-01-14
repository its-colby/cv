<script lang="ts" generics="T">
    import { type Snippet } from 'svelte';
    let { title, data, content }: { title: string, data: T[], content: Snippet<[T]> } = $props();
</script>

<h1>{title}</h1>
<ul>
    {#each data as item}
        <li>{@render content(item)}</li>
    {/each}
</ul>

<style>
    h1 {
        text-align: center;

        font-size: 30px;
        font-weight: 500;

        color: var(--text-neutral-color);

        margin: 0px;
        margin-bottom: 30px;
    }

    ul {
        display: flex;
        flex-direction: column;

        list-style: none;

        gap: 10px;
        padding: 0px;
    }
</style>