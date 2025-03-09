import { Role } from "./Role";
import { Commitment } from "../utils";

export class IndustryRole extends Role {
    public readonly company: string;
    public readonly commitment: Commitment;
    public readonly duration: string;
    public readonly responsibilities: string;
    public readonly impact: string;

    constructor({
        title,
        date,
        contributions,
        company,
        commitment,
        duration,
        responsibilities,
        impact
    }: {
        title: string;
        date: string;
        contributions: string[];
        company: string;
        commitment: Commitment;
        duration: string;
        responsibilities: string;
        impact: string;
    }) {
        super({ 
            title, 
            date, 
            contributions 
        });
        this.company = company;
        this.commitment = commitment;
        this.duration = duration;
        this.responsibilities = responsibilities;
        this.impact = impact;
    }
}