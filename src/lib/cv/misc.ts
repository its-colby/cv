import { Date, Month } from "./date";
import { Commitment, Event, type EventParams } from "./event";

export class ProfessionalBreak extends Event {

    constructor(params: EventParams) {
        super({...params, kind: 'Personal'});
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
            end_month: Month.AUGUST,
        }),
        commitment: Commitment.MORE_THAN_FULL_TIME,
        title: 'Professional Break: Pure Mathematics',
        contributions: [
            'Left my current employment in order to study pure mathematics.',
            "Alongside annoyingly teaching my friends math, I used open-source lectures, textbooks, blogs, and wikipedia pages to greatly increase my familiarity with pure mathematics.",
            'Initialy studied... abstract algebra, commutative algebra, and algebraic number theory.',
            'Then studied... point-set topology, algebraic topology, and knot theory.',
            'Then studied... measure theory and analytic number theory',
            'Then studied... category theory, universal algebra, proof theory, reverse mathematics, model theory, set theory, type theories, homotopy type theory, and modal logics.',
            'Then studied... non-euclidean geometries and geometric algebra.',
        ],
    }),
    new ProfessionalBreak({
        date: new Date({
            start_year: 2023,
            start_month: Month.DECEMBER,
            end_year: 2024,
            end_month: Month.JANUARY,
        }),
        commitment: Commitment.PART_TIME,
        title: 'Music Theory, Cognition, and Pyschology',
        contributions: [
            'Studied music theory, orchestration, and composition in order to inform me while developing my own theory of romantic-era classical music.',
            'Developed a formalization of mental structures involved in knowledge: concepts, definitions, hierarchies, and all the variations of each of these.',
            "Developed an axiomatic approach to motivational psychology, and more broadly speaking, the theory of life's purpose.",
        ],
    }),
    new ProfessionalBreak({
        date: new Date({
            start_year: 2022,
            start_month: Month.SEPTEMBER,
            end_year: 2022,
            end_month: Month.OCTOBER,
        }),
        commitment: Commitment.PART_TIME,
        title: 'Theory of Product Development',
        contributions: [
            'I wanted to compile everything I learned about product development in industry into a a systematic way of developing products.',
        ],
    }),
]