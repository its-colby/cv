<script lang="ts">
    let { time, title, company } : { time: string, title: string, company: string } = $props();
</script>

<h2>
    <time>{time}</time>
    <span class="role-title">{title}</span>
    <span class="role-company">{company}</span>
</h2>

<style>
    h2 {
        color: var(--text-neutral-color);

        margin: 0px;
        display: flex;
        flex-direction: row;
        font-size: 18px;
        font-weight: 400;
    }

    span.role-title {
        width: 250px;
        font-size: 20px;
        font-weight: 500;
        color: var(--text-brand-color1);
    }

    time {
        width: 150px;
    }

    :global(summary:hover) time, :global(summary:hover) span {
        color: var(--button-color-hovered);
        transition: 0.4s;
    }
</style>