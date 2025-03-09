import { Role } from "./Role";

export class TeachingRole extends Role {
    public readonly topics: string;

    constructor({
        title,
        date,
        contributions,
        topics
    }: {
        title: string;
        date: string;
        contributions: string[];
        topics: string;
    }) {
        super({ 
            title, 
            date, 
            contributions 
        });
        this.topics = topics;
    }
}
