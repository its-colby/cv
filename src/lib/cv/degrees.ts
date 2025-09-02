import { Event, type EventParams } from "./event";
import { Date, Month } from "./date";


export interface DegreeParams extends EventParams {
    degree: string;
    field: string;
    institution: string;
    expected?: boolean;
}

export class Enrollment extends Event {
    public readonly degree: string;
    public readonly field: string;
    public readonly institution: string;

    constructor(params: DegreeParams) {
        super({
            ...params, 
            kind: 'Enrollment',
            title: `${params.institution} (${params.degree} ${params.field})`
        });
        this.degree = params.degree;
        this.field = params.field;
        this.institution = params.institution;
    }
}

export class Graduation extends Event {
    public readonly degree: string;
    public readonly field: string;
    public readonly institution: string;
    public readonly expected?: boolean;

    constructor(params: DegreeParams) {
        super({
            ...params, 
            kind: 'Graduation', 
            title: `${params.institution} (${params.degree} ${params.field})`
        });
        this.degree = params.degree;
        this.field = params.field;
        this.institution = params.institution;
        this.expected = params.expected;
    }
}

const undergrad = {
    degree: 'A.B.', 
    field: 'Computer Science', 
    institution: 'Brown University' ,
}

const masters = {
    degree: 'M.S.', 
    field: 'Computer Science', 
    institution: 'Brown University',
}

export const graduations: Graduation[] = [
    new Graduation({
        ...undergrad, 
        date: new Date({
            start_year: 2024,
            start_month: Month.MAY,
        }),
        expected: false
    }),
]

export const enrollments: Enrollment[] = [
    new Enrollment({...undergrad, date: new Date({
        start_year: 2019,
        start_month: Month.SEPTEMBER,
    })}),
    new Enrollment({...masters, date: new Date({
        start_year: 2025,
        start_month: Month.SEPTEMBER,
    })}),
]