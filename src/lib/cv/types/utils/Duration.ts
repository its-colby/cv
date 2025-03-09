export enum Duration {
    MONTHS = 'months',
    YEARS = 'years'
}

export function format_duration(value: number, unit: Duration): string {
    if (unit === Duration.YEARS) {
        return `${value} year${value !== 1 ? 's' : ''}`;
    }
    return `${value} month${value !== 1 ? 's' : ''}`;
}