export interface AcademicRole {
    year: string;
    title: string;
    bullets: string[];
}

export interface TeachingRole extends AcademicRole {
    topics: string;
}

export const research_roles: AcademicRole[] = [
    { 
        year: '2023 Spring', 
        title: 'Optimizing Partially Blind Signatures', 
        bullets: [
            'I managed to reduce a round of communication by embedding the sharing of the unblinded information directly into the scheme\'s steps, thus removing a round of set-up.'
        ] 
    },
    { 
        year: '2022 Fall', 
        title: 'Slippage in Automated Market Makers', 
        bullets: [
            'Investigated decentralized exchanges, focusing on liquidity pool management, and ran comparative simulations to identify exchanges with the least slippage.'
        ] 
    },
    { 
        year: '2021 Spring', 
        title: 'Stack Canaries in Multithreaded Programs', 
        bullets: [
            'In GCC, stack canaries in multi-threaded applications were susceptible to byte-by-byte brute-forcing, as new threads inherited the parent thread\'s canary. I wrote a patch and a short paper thoroughly explaining the problem and the solution.',
        ] 
    },
    { 
        year: '2021 8 months', 
        title: 'Distributed Sorting with Big Data', 
        bullets: [
            'Implemented, benchmarked, tested, and profiled a concurrent sorting algorithm capable of sorting big data across multiple partitions, with custom comparators, and code generation.',
            'Implemented a history server that kept track of all stages, plans, and results of all queries.',
            'Exposed C++ math functionality to a Python library for developer friendly query execution.'
        ] 
    },
];

export const teaching_roles: TeachingRole[] = [
    {
        year: '2024 Spring', 
        title: 'Applied Cryptography', 
        topics: 'homomorphic properties of various asymmetric schemes, oblivious transfer, garbled circuits, threshold encryption, blind signatures, elementary zero-knowledge proofs, digital signatures, block ciphers, Diffie-Hellman ratchet, modes of symmetric encryption, message integrity, asymmetric encryption, and key derivation.', 
        bullets: [
            'Held weekly office hours for students to ask questions about course topics.', 
        ] 
    },
    { 
        year: '2023 Spring', 
        title: 'The Basics of Cryptographic Systems', 
        topics: 'theoretical foundations of digital signature schemes, public key infrastructure, and differential privacy.', 
        bullets: [
            'Held weekly office hours for students to ask about course topics.', 
        ] 
    },
    { 
        year: '2021 Fall', 
        title: 'Deep Learning', 
        topics: 'convolutional NNs, recurrent NNs (LSTM, GRU), autoencoders, transformers, graph NNs, and generative adversarial NNs, mathematical foundations of deep learning, PyTorch, and TensorFlow',
        bullets: [
            'As Head Teaching Assistant, I held weekly office hours and managed 30 TA\'s in order to maintain all course projects and written assignments.',
            'Held weekly office hours for students to ask about course topics.',
        ] 
    },
    { 
        year: '2021 Summer', 
        title: 'Blockchains & Cryptocurrencies', 
        topics: 'consensus mechanisms, fork-choice rules, execution engines (EVM / WASM), state management (account vs UTXO), transaction memory pools, rollups, sharding, front-running and MEV, smart contracts, decentralized finance, and decentralized applications.',
        bullets: [
            'As Head Teaching Assistant, I held weekly office hours, posted supplementary lectures, and managed 6 TA\'s in order to create all course projects and written assignments.',
            'Designed and implemented an extensive peer-to-peer blockchain in GoLang from the ground up. Students added to this codebase in their assignments.',
            'Designed and implemented a more optimized version of state management and consensus in C++ for use in student\'s projects.',
            'Designed a lending platform and a decentralized exchange in Solidity as other projects for students to build off of.',
            'Held weekly office hours for students to ask about any cutting-edge technique in blockchain development.'
        ] 
    },
    { 
        year: '2021 Spring', 
        title: 'Modern Web and Mobile Applications', 
        topics: 'HTML, CSS, Javascript, Typescript, React, React Native, Vue, NextJS, Tailwind, Bootstrap, NodeJS, Express,Firebase, MongoDB, Django, Flask, front-end state management, object relational mapping, and authentication.',
        bullets: [
            'Held weekly office hours for students to ask about course topics.',
        ] 
    }
];

export interface Course {
    date: string;
    title: string;
}

export const courses: Course[] = [
    { date: '2023 Spring', title: 'Applied Cryptography' },
    { date: '2023 Spring', title: 'Operating Systems' },
    { date: '2021 Spring', title: 'Computer Systems Security' },
    { date: '2021 Spring', title: 'Distributed Systems' },
    { date: '2021 Spring', title: 'Topics in Software Security' },
    { date: '2020 Fall', title: 'Software Security Exploitation' },
    { date: '2021 Fall', title: 'Deep Learning' },
    { date: '2021 Fall', title: 'Artificial Intelligence' },
    { date: '2020 Spring', title: 'Modern Web & Mobile Applications' },
    { date: '2020 Spring', title: 'Introduction to Software Engineering' },
    { date: '2019 Fall', title: 'Accelerated Introduction to Computer Science' },
    { date: '2019 Fall', title: 'Mathematical Logic' },
    { date: '2019 Fall', title: 'Linear Algebra' },
];