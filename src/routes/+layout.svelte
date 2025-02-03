<script lang="ts">
    import { theme } from '$lib/theme';
    import { onMount } from 'svelte';

    onMount(() => {
        theme.apply(document.documentElement);
    });

    let { children } = $props();
</script>

{@render children()}