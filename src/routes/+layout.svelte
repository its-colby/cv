<script lang="ts">
    import { apply_color_theme, UNI_THEMES } from '$lib/theme/color_theme';
    import { onMount } from 'svelte';

    onMount(() => {
        apply_color_theme(document.documentElement, UNI_THEMES.dark);
    });

    let { children } = $props();
</script>

{@render children()}