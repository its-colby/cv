<script lang="ts">
    let { children }: { children: any } = $props();
</script>

<ul>
    {@render children()}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;

        list-style: none;

        gap: 20px;
        padding: 0px;
        padding-top: 30px;
    }
</style>
