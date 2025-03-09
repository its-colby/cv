export class Role {
    public readonly title: string;
    public readonly date: string;
    public readonly contributions: string[];

    constructor({
        title,
        date,
        contributions
    }: {
        title: string;
        date: string;
        contributions: string[];
    }) {
        this.title = title;
        this.date = date;
        this.contributions = contributions;
    }
}