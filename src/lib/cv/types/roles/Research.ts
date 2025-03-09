import { Role } from "./Role";

export class ResearchRole extends Role {
    constructor({
        title,
        date,
        contributions
    }: {
        title: string;
        date: string;
        contributions: string[];
    }) {
        super({ 
            title, 
            date, 
            contributions 
        });
    }
}