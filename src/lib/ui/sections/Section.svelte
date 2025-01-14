<script lang="ts" generics="T">
    import { type Snippet } from 'svelte';
    let { title, snippet_args, content }: { title: string, snippet_args: T[], content: Snippet<[T]> } = $props();
</script>

<h1>{title}</h1>
<ul>
    {#each snippet_args as arg}
        <li>{@render content(arg)}</li>
    {/each}
</ul>

<style>
    h1 {
        text-align: center;

        font-size: 30px;
        font-weight: 500;

        color: var(--text-neutral-color);

        margin: 0px;
    }

    ul {
        display: flex;
        flex-direction: column;

        list-style: none;

        gap: 20px;
        padding: 0px;
        padding-top: 30px;
    }
</style>