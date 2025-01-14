<script lang="ts">
    let { hovered, time, title, company } : { hovered: boolean, time: string, title: string, company: string } = $props();
</script>

<h2>
    <time class={hovered ? 'industry-h2-hovered' : ''}>{time}</time>
    <span class="role-title {hovered ? 'industry-h2-hovered' : ''}">{title}</span>
    <span class="role-company {hovered ? 'industry-h2-hovered' : ''}">{company}</span>
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

    span.role-title.industry-h2-hovered {
        color: var(--text-contrast-color);
    }

    time {
        width: 150px;
    }

    .industry-h2-hovered {
        color: var(--text-contrast-color);
    }
</style>