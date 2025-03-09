import { IndustryRole, Commitment, format_duration, Duration } from "$lib/cv/types";

export const industry_roles: IndustryRole[] = [
    {
        title: 'Product Manager',
        company: 'Subspace Labs',
        date: '2023 - 2024',
        commitment: Commitment.FULL_TIME,
        duration: format_duration(13, Duration.MONTHS),
        responsibilities: 'Given the concept of a product, I analyzed competing software, designed and spec\'ed our solution, and managed our roadmap and development.',
        impact: 'I designed, spec\'ed, and managed the development of 5 POCs, along with 2 MVPs.',
        contributions: [
            'Designed an access layer for a blockchain-based file storage system, achieving enhanced performance and strengthened privacy through tailored protocols.',
            'Designed a new identity scheme, leveraging proof-of-personhood, augmented TLS sessions with MPC and ZKP, and blockchain-based verified credentials.',
            'Formalized security properties for the variations of proof-of-personhood.',
        ]
    },
    {
        title: "Lead Architect",
        company: "Hence Labs",
        date: "2022",
        commitment: Commitment.FULL_TIME,
        duration: format_duration(6, Duration.MONTHS),
        responsibilities: 'Define the architecture of an multi-blockchain network and manage various development and research teams.',
        impact: 'I collaboratively designed the architecture of an entire multi-chain network, produced over 100 pages of specs, and managed the development from concept to MVP.',
        contributions: [
            'Meticulosuly spec\'ed novel leader and leaderless consensus algorithms, hot and cold state management, message-passing, and much more—all with cutting edge industry standards.',
            'Collaborated on the design of the network topology, committee selection algorithm, and consensus protocols.',
            'Served as the face and voice of an 8 minute professionally produced marketing video.',
        ]
    },
    {
        title: "Technical Consultant",
        company: "Hence Labs",
        date: "2022",
        commitment: Commitment.PART_TIME,
        duration: format_duration(3, Duration.MONTHS),
        responsibilities: 'Draft and communicate advisory reports on blockchain architecture.',
        impact: 'Informed the design of a multi-chain network and was promoted to a lead architect role.',
        contributions: [
            'Contrasted the network economics, mechanism design, and execution environments of every major blockchain.',
        ]
    },
    {
        title: "Product Owner",
        company: "MakerDAO",
        date: "2022 - 2023",
        commitment: Commitment.FULL_TIME,
        duration: format_duration(13, Duration.MONTHS),
        responsibilities: 'Hire and manage a team of developers to build an onboarding and educational platform for the MakerDAO community.',
        impact: 'Built and relased version 1 of the platform; it was then shortly acquired and repurposed by the operations-focused company Powerhouse.',
        contributions: [
            'Development was always ahead of schedule, due to my ability to limit \'deleted features\', refactors, and other technical debt.',
        ]
    },
    {
        title: "Technical Consultant",
        company: "MakerDAO",
        date: "2021",
        commitment: Commitment.PART_TIME,
        duration: format_duration(3, Duration.MONTHS),
        responsibilities: 'Develop new solutions to securely and performantly move company decisions, such as budgement management and governance, on-chain.',
        impact: 'Designed, developed, and benchmarked an on-chain POC for range polling that mitigated tactical voting.',
        contributions: [
            'Researched and benchmarked the various range polling protocols and defined various attacks against each one.'
        ]
    },
]