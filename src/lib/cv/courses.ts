import { Event, type EventParams } from "./event";
import { seasons } from "./date"


export class Course extends Event {

    constructor(params: EventParams) {
        super({...params, kind: 'Course' });
    }
}


export const courses: Course[] = [

    new Course({ date: seasons.fall2019, title: 'Accelerated Introduction to Computer Science' }),
    new Course({ date: seasons.fall2019, title: 'Mathematical Logic' }),
    new Course({ date: seasons.fall2019, title: 'Linear Algebra' }),


    new Course({ date: seasons.spring2020, title: 'Modern Web & Mobile Applications' }),
    new Course({ date: seasons.spring2020, title: 'Introduction to Software Engineering' }),


    new Course({ date: seasons.fall2020, title: 'Software Security Exploitation' }),
    new Course({ date: seasons.fall2020, title: 'Deep Learning' }),
    new Course({ date: seasons.fall2020, title: 'Artificial Intelligence' }),


    new Course({ date: seasons.spring2021, title: 'Computer Systems Security' }),
    new Course({ date: seasons.spring2021, title: 'Distributed Systems' }),
    new Course({ date: seasons.spring2021, title: '[Graduate] Topics in Software Security' }),


    new Course({ date: seasons.spring2023, title: 'Applied Cryptography' }),
    new Course({ date: seasons.spring2023, title: 'Operating Systems' }),

    
    new Course({ date: seasons.fall2025, title: 'Compilers' }),
    new Course({ date: seasons.fall2025, title: 'Formal Verification' }),


    new Course({ date: seasons.fall2025, title: '(Audit) [Graduate] Algebraic Topology' }),
    new Course({ date: seasons.fall2025, title: '(Audit) [Graduate] Algebraic Number Theory' }),
    new Course({ date: seasons.fall2025, title: '(Audit) [Graduate] Algebra' }),


    new Course({ date: seasons.spring2026, title: 'Logic for Systems' }),
    new Course({ date: seasons.spring2026, title: '(Audit) [Graduate] Algebraic Geometry' }),
    new Course({ date: seasons.spring2026, title: '(Audit) [Graduate] Analytic Number Theory' }),

];