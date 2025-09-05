<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(() => {
        goto('/about-me');
    });
</script>

<!-- This page redirects to /home -->
