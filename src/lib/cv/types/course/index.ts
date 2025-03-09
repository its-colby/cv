export class Course {
    public readonly title: string;
    public readonly date: string;

    constructor({ 
        title, 
        date,
    }: { 
        title: string; 
        date: string; 
    }) {
        this.title = title;
        this.date = date;
    }
}