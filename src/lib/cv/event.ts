import { Date } from "./date";

export enum Commitment {
    FULL_TIME = 'Full-Time',
    PART_TIME = 'Part-Time'
}

export interface EventParams {
    title?: string;
    date: Date;
    commitment?: Commitment;
    contributions?: string[];
}


export class Event {
    public readonly kind: string;
    public readonly title?: string;
    public readonly date: Date;
    public readonly commitment?: Commitment;
    public readonly contributions?: string[];
    
    constructor(params: EventParams & { kind: string }) {
        this.kind = params.kind;
        this.title = params.title;
        this.date = params.date;
        this.commitment = params.commitment;
        this.contributions = params.contributions;
    }
}