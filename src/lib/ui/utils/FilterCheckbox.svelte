<script lang="ts">
    interface Props {
        label: string;
        checked: boolean;
        onchange: (enabled: boolean) => void;
    }

    let { label, checked, onchange }: Props = $props();
    
    function handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        onchange(target.checked);
    }
</script>

<label class="filter-checkbox">
    <input 
        type="checkbox" 
        {checked} 
        onchange={handleChange}
    />
    <span class="checkmark"></span>
    <span class="label-text">{label}</span>
</label>

<style lang="scss">
    .filter-checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.375rem;
        transition: background-color 0.2s ease;
        user-select: none;
        
        &:hover {
            background-color: var(--hover-background, rgba(0, 0, 0, 0.05));
        }
    }

    input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        height: 18px;
        width: 18px;
        background-color: var(--checkbox-background, #ffffff);
        border: 2px solid var(--checkbox-border, #d1d5db);
        border-radius: 3px;
        position: relative;
        transition: all 0.2s ease;
        flex-shrink: 0;
        
        &::after {
            content: "";
            position: absolute;
            display: none;
            left: 5px;
            top: 2px;
            width: 4px;
            height: 8px;
            border: solid var(--checkbox-check, #ffffff);
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    }

    input:checked ~ .checkmark {
        background-color: var(--checkbox-checked, #3b82f6);
        border-color: var(--checkbox-checked, #3b82f6);
        
        &::after {
            display: block;
        }
    }

    input:focus ~ .checkmark {
        box-shadow: 0 0 0 3px var(--focus-ring, rgba(59, 130, 246, 0.1));
    }

    .label-text {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-secondary, #374151);
        line-height: 1.25;
    }

    input:checked ~ .label-text {
        color: var(--text-primary, #111827);
        font-weight: 600;
    }
</style>
