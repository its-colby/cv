export enum Commitment {
    FULL_TIME = 'Full-Time',
    PART_TIME = 'Part-Time'
}

enum Duration {
    MONTHS = 'months',
    YEARS = 'years'
}

export function format_duration(value: number, unit: Duration): string {
    if (unit === Duration.YEARS) {
        return `${value} year${value !== 1 ? 's' : ''}`;
    }
    return `${value} month${value !== 1 ? 's' : ''}`;
}

export enum RoleType {
    TEACHING = 'teaching',
    RESEARCH = 'research',
    INDUSTRY = 'industry',
    COURSE = 'course'
}

export interface Role {
    kind: RoleType;
    title: string;
    date: string;
    contributions: string[];

}

export interface ResearchRole extends Role {
    kind: RoleType.RESEARCH
}

export interface IndustryRole extends Role {
    kind: RoleType.INDUSTRY
    company: string;
    commitment: Commitment;
    duration: string;
    responsibilities: string;
    impact: string;
}

export interface TeachingRole extends Role {
    kind: RoleType.TEACHING
    topics: string;
}

export type AnyRole = ResearchRole | TeachingRole | IndustryRole;

export interface Course extends Omit<Role, 'contributions'> {};


export const industry_roles: IndustryRole[] = [
    {
        kind: RoleType.INDUSTRY,
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
        kind: RoleType.INDUSTRY,
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
        kind: RoleType.INDUSTRY,
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
        kind: RoleType.INDUSTRY,
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
        kind: RoleType.INDUSTRY,
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

export const research_roles: ResearchRole[] = [
    { 
        kind: RoleType.RESEARCH,
        date: '2023 Spring', 
        title: 'Optimizing Partially Blind Signatures', 
        contributions: [
            'I managed to reduce a round of communication by embedding the sharing of the unblinded information directly into the scheme\'s steps, thus removing a round of set-up.'
        ] 
    },
    { 
        kind: RoleType.RESEARCH,
        date: '2022 Fall', 
        title: 'Slippage in Automated Market Makers', 
        contributions: [
            'Investigated decentralized exchanges, focusing on liquidity pool management, and ran comparative simulations to identify exchanges with the least slippage.'
        ] 
    },
    { 
        kind: RoleType.RESEARCH,
        date: '2021 Spring', 
        title: 'Stack Canaries in Multithreaded Programs', 
        contributions: [
            'In GCC, stack canaries in multi-threaded applications were susceptible to byte-by-byte brute-forcing, as new threads inherited the parent thread\'s canary. I wrote a patch and a short paper thoroughly explaining the problem and the solution.',
        ] 
    },
    { 
        kind: RoleType.RESEARCH,
        date: '2021 8 months', 
        title: 'Distributed Sorting with Big Data', 
        contributions: [
            'Implemented, benchmarked, tested, and profiled a concurrent sorting algorithm capable of sorting big data across multiple partitions, with custom comparators, and code generation.',
            'Implemented a history server that kept track of all stages, plans, and results of all queries.',
            'Exposed C++ math functionality to a Python library for developer friendly query execution.'
        ] 
    },
];

export const teaching_roles: TeachingRole[] = [
    {
        kind: RoleType.TEACHING,
        date: '2024 Spring', 
        title: 'Applied Cryptography', 
        topics: 'homomorphic properties of various asymmetric schemes, oblivious transfer, garbled circuits, threshold encryption, blind signatures, elementary zero-knowledge proofs, digital signatures, block ciphers, Diffie-Hellman ratchet, modes of symmetric encryption, message integrity, asymmetric encryption, and key derivation.', 
        contributions: [
            'Held weekly office hours for students to ask questions about course topics.', 
        ] 
    },
    { 
        kind: RoleType.TEACHING,
        date: '2023 Spring', 
        title: 'The Basics of Cryptographic Systems', 
        topics: 'theoretical foundations of digital signature schemes, public key infrastructure, and differential privacy.', 
        contributions: [
            'Held weekly office hours for students to ask about course topics.', 
        ] 
    },
    { 
        kind: RoleType.TEACHING,
        date: '2021 Fall', 
        title: 'Deep Learning', 
        topics: 'convolutional NNs, recurrent NNs (LSTM, GRU), autoencoders, transformers, graph NNs, and generative adversarial NNs, mathematical foundations of deep learning, PyTorch, and TensorFlow',
        contributions: [
            'As Head Teaching Assistant, I held weekly office hours and managed 30 TA\'s in order to maintain all course projects and written assignments.',
            'Held weekly office hours for students to ask about course topics.',
        ] 
    },
    { 
        kind: RoleType.TEACHING,
        date: '2021 Summer', 
        title: 'Blockchains & Cryptocurrencies', 
        topics: 'consensus mechanisms, fork-choice rules, execution engines (EVM / WASM), state management (account vs UTXO), transaction memory pools, rollups, sharding, front-running and MEV, smart contracts, decentralized finance, and decentralized applications.',
        contributions: [
            'As Head Teaching Assistant, I held weekly office hours, posted supplementary lectures, and managed 6 TA\'s in order to create all course projects and written assignments.',
            'Designed and implemented an extensive peer-to-peer blockchain in GoLang from the ground up. Students added to this codebase in their assignments.',
            'Designed and implemented a more optimized version of state management and consensus in C++ for use in student\'s projects.',
            'Designed a lending platform and a decentralized exchange in Solidity as other projects for students to build off of.',
            'Held weekly office hours for students to ask about any cutting-edge technique in blockchain development.'
        ] 
    },
    { 
        kind: RoleType.TEACHING,
        date: '2021 Spring', 
        title: 'Modern Web and Mobile Applications', 
        topics: 'HTML, CSS, Javascript, Typescript, React, React Native, Vue, NextJS, Tailwind, Bootstrap, NodeJS, Express,Firebase, MongoDB, Django, Flask, front-end state management, object relational mapping, and authentication.',
        contributions: [
            'Held weekly office hours for students to ask about course topics.',
        ] 
    }
];


export const courses: Course[] = [
    { kind: RoleType.COURSE, date: '2023 Spring', title: 'Applied Cryptography' },
    { kind: RoleType.COURSE, date: '2023 Spring', title: 'Operating Systems' },
    { kind: RoleType.COURSE, date: '2021 Spring', title: 'Computer Systems Security' },
    { kind: RoleType.COURSE, date: '2021 Spring', title: 'Distributed Systems' },
    { kind: RoleType.COURSE, date: '2021 Spring', title: 'Topics in Software Security' },
    { kind: RoleType.COURSE, date: '2020 Fall', title: 'Software Security Exploitation' },
    { kind: RoleType.COURSE, date: '2021 Fall', title: 'Deep Learning' },
    { kind: RoleType.COURSE, date: '2021 Fall', title: 'Artificial Intelligence' },
    { kind: RoleType.COURSE, date: '2020 Spring', title: 'Modern Web & Mobile Applications' },
    { kind: RoleType.COURSE, date: '2020 Spring', title: 'Introduction to Software Engineering' },
    { kind: RoleType.COURSE, date: '2019 Fall', title: 'Accelerated Introduction to Computer Science' },
    { kind: RoleType.COURSE, date: '2019 Fall', title: 'Mathematical Logic' },
    { kind: RoleType.COURSE, date: '2019 Fall', title: 'Linear Algebra' },
];