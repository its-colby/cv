<script lang="ts">
    interface Props {
        options: string[];
        selectedValue: string;
        onchange: (value: string) => void;
        name?: string;
    }

    let { options, selectedValue, onchange, name = 'filter-radio' }: Props = $props();
</script>

<div class="filter-grid">
    {#each options as option}
        <label class="radio-option">
            <input 
                type="radio" 
                {name}
                value={option}
                checked={selectedValue === option}
                onchange={() => onchange(option)}
            />
            <span class="radio-label">{option}</span>
        </label>
    {/each}
</div>

<style lang="scss">
    @use '$lib/theme/spacing.scss';
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/fonts.scss';
    @use "sass:map";

    .filter-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: map.get(spacing.$gaps, 'half');

        @include screens.mobile {
            gap: 0.25rem;
        }
    }

    .radio-option {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        cursor: pointer;
        padding: 0.25rem map.get(spacing.$gaps, 'half');
        border-radius: 0.25rem;
        transition: background-color 0.2s ease;
        user-select: none;

        &:hover {
            background-color: var(--card-a-background-hovered);
        }

        input[type="radio"] {
            margin: 0;
            cursor: pointer;
            accent-color: var(--text-brand);
        }
    }

    .radio-label {
        @extend %base-font;
        font-size: var(--font-size-regular);
        color: var(--text-brand);
        cursor: pointer;
        
        .radio-option:has(input:checked) & {
            color: var(--text-contrast);
            font-weight: var(--font-weight-bold);
        }
    }
</style>
