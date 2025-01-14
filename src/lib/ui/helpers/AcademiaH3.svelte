<script lang="ts">
    let { hovered, year, title }: { hovered: boolean, year: string, title: string } = $props();
</script>

<h3>
    <time class={hovered ? 'academia-h3-hovered' : ''}>{year}</time>
    <span class={hovered ? 'academia-h3-hovered' : ''}>{title}</span>
</h3>

<style>
    h3 {
        display: flex;
        align-items: center;
        gap: 0;

        margin: 0;
        
        font-size: 18px;
        font-weight: 400;
    }

    time {
        width: 150px;
        color: var(--text-neutral-color);
    }

    span {
        color: var(--text-brand-color1);
    }

    .academia-h3-hovered {
        color: var(--button-color-hovered);
    }
</style>