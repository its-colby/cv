import { Date, Month } from "./date";
import { Commitment, Event, type EventParams } from "./event";

export class ProfessionalBreak extends Event {

    constructor(params: EventParams) {
        super({...params, kind: 'Personal', title: 'Professional Break: Pure Mathematics'});
    }
}




export class GapYear extends Event {

    constructor(params: EventParams) {
        super({...params, 
            kind: 'Gap Year',
            title: 'Paused Undergraduate Study: Work'
        });
    }
}

export const gap_years: GapYear[] = [
    new GapYear({
        date: new Date({
            start_year: 2021,
            start_month: Month.DECEMBER,
            end_year: 2023,
            end_month: Month.JANUARY,
        }),
        contributions: ['Temporarily left university to work multiple roles in industry.'],
    }),
]

export const professional_breaks: ProfessionalBreak[] = [
    new ProfessionalBreak({
        date: new Date({
            start_year: 2024,
            start_month: Month.NOVEMBER,
            end_year: 2025,
            end_month: Month.MAY,
        }),
        commitment: Commitment.FULL_TIME,
        contributions: [
            'Left my current employment in order to study pure mathematics.',
            'Read 100+ papers on pure mathematics, including topology, algebraic geometry, and number theory.',
        ],
    }),
]