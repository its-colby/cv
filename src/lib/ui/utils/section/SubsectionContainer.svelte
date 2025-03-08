<script lang="ts">
    let {
        children
    }: {
        children: any
    } = $props();
</script>

<section>
    {@render children()}
</section>