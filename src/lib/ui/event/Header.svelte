<script lang="ts">

    import { Event } from '$lib/cv';
    
    let { 
        event,
        highlight = $bindable(false)
    }: { 
        event: Event,
        highlight?: boolean
    } = $props();

</script>


<header class:highlighted={highlight}>
    <div>
        <time> {event.date.start_month}</time>
        <span> {event.kind}</span>
    </div>
    <h2>{event.title || 'Unknown'}</h2>
</header>

<style lang="scss">
    @use '$lib/theme/screens.scss';

    header {
        display: flex;
        margin: 0;

        font-weight: var(--font-weight-base);
        color: var(--text-neutral);
        font-size: var(--font-size-medium);
        
        .highlighted {
            color: var(--text-contrast);
        }

        @include screens.desktop {
            flex-direction: row;
            align-items: center;
        }

        @include screens.mobile {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    time {
        width: 8rem;
    }

    span {
        width: 7rem;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    h2 {
        margin: 0;
        font-size: inherit;
        font-weight: inherit;
    }
    
</style>
