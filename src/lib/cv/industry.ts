import { Event, type EventParams, Commitment } from "./event";
import { Date, Month } from "./date";

export interface IndustryRoleParams extends EventParams {
    company: string;
    responsibilities: string;
    impact: string;
}


export class IndustryRole extends Event {
    public readonly company: string;
    public readonly responsibilities: string;
    public readonly impact: string;

    constructor(params: IndustryRoleParams) {
        super({...params, kind: 'Industry' });
        this.company = params.company;
        this.responsibilities = params.responsibilities;
        this.impact = params.impact;
    }
}


export const industry_roles: IndustryRole[] = [
    new IndustryRole({
        title: 'Product Manager',
        company: 'Subspace Labs',
        commitment: Commitment.FULL_TIME,
        date: new Date({
            start_year: 2023,
            start_month: Month.NOVEMBER,
            end_year: 2024,
            end_month: Month.OCTOBER,
        }),
        responsibilities: 'Given the concept of a product, I analyzed competing software, designed and spec\'ed our solution, and managed our roadmap and development.',
        impact: 'I designed, spec\'ed, and managed the development of 5 POCs, along with 2 MVPs.',
        contributions: [
            'Designed an access layer for a blockchain-based file storage system, achieving enhanced performance and strengthened privacy through tailored protocols.',
            'Designed a new identity scheme, leveraging proof-of-personhood, augmented TLS sessions with MPC and ZKP, and blockchain-based verified credentials.',
            'Formalized security properties for the variations of proof-of-personhood.',
        ]
    }),
    new IndustryRole({
        title: "Lead Architect",
        company: "Hence Labs",
        commitment: Commitment.FULL_TIME,
        date: new Date({
            start_year: 2022,
            start_month: Month.MAY,
            end_month: Month.OCTOBER,
        }),
        responsibilities: 'Define the architecture of an multi-blockchain network and manage various development and research teams.',
        impact: 'I collaboratively designed the architecture of an entire multi-chain network, produced over 100 pages of specs, and managed the development from concept to MVP.',
        contributions: [
            'Meticulosuly spec\'ed novel leader and leaderless consensus algorithms, hot and cold state management, message-passing, and much more—all with cutting edge industry standards.',
            'Collaborated on the design of the network topology, committee selection algorithm, and consensus protocols.',
            'Served as the face and voice of an 8 minute professionally produced marketing video.',
        ]
    }),
    new IndustryRole({
        title: "Technical Consultant",
        company: "Hence Labs",
        date: new Date({
            start_year: 2022,
            start_month: Month.FEBRUARY,
            end_month: Month.APRIL,
        }),
        commitment: Commitment.PART_TIME,
        responsibilities: 'Draft and communicate advisory reports on blockchain architecture.',
        impact: 'Informed the design of a multi-chain network and was promoted to a lead architect role.',
        contributions: [
            'Contrasted the network economics, mechanism design, and execution environments of every major blockchain.',
        ]
    }),
    new IndustryRole({
        title: "Product Owner",
        company: "MakerDAO",
        date: new Date({
            start_year: 2021,
            start_month: Month.DECEMBER,
            end_year: 2023,
            end_month: Month.JANUARY,
        }),
        commitment: Commitment.FULL_TIME,
        responsibilities: 'Hire and manage a team of developers to build an onboarding and educational platform for the MakerDAO community.',
        impact: 'Built and relased version 1 of the platform; it was then shortly acquired and repurposed by the operations-focused company Powerhouse.',
        contributions: [
            'Development was always ahead of schedule, due to my ability to limit \'deleted features\', refactors, and other technical debt.',
        ]
    }),
    new IndustryRole({
        title: "Technical Consultant",
        company: "MakerDAO",
        date: new Date({
            start_year: 2021,
            start_month: Month.SEPTEMBER,
            end_month: Month.NOVEMBER,
        }),
        commitment: Commitment.PART_TIME,
        responsibilities: 'Develop new solutions to securely and performantly move company decisions, such as budgement management and governance, on-chain.',
        impact: 'Designed, developed, and benchmarked an on-chain POC for range polling that mitigated tactical voting.',
        contributions: [
            'Researched and benchmarked the various range polling protocols and defined various attacks against each one.'
        ]
    }),
];