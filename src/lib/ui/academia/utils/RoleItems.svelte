<script lang="ts">
    let {
        children
    }: {
        children: any
    } = $props();
</script>

<ul>
    {@render children()}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;

        list-style: none;

        gap: 1rem;
        padding-top: 1rem;
        padding-left: 2.5rem;
        margin: 0;

        @media (max-width: 700px) {
            padding-left: 0;
        }
    }
</style>