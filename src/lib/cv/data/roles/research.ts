import { ResearchRole } from "$lib/cv/types";

export const research_roles: ResearchRole[] = [
    { 
        date: '2023 Spring', 
        title: 'Optimizing Partially Blind Signatures', 
        contributions: [
            'I managed to reduce a round of communication by embedding the sharing of the unblinded information directly into the scheme\'s steps, thus removing a round of set-up.'
        ] 
    },
    { 
        date: '2022 Fall', 
        title: 'Slippage in Automated Market Makers', 
        contributions: [
            'Investigated decentralized exchanges, focusing on liquidity pool management, and ran comparative simulations to identify exchanges with the least slippage.'
        ] 
    },
    { 
        date: '2021 Spring', 
        title: 'Stack Canaries in Multithreaded Programs', 
        contributions: [
            'In GCC, stack canaries in multi-threaded applications were susceptible to byte-by-byte brute-forcing, as new threads inherited the parent thread\'s canary. I wrote a patch and a short paper thoroughly explaining the problem and the solution.',
        ] 
    },
    { 
        date: '2021 8 months', 
        title: 'Distributed Sorting with Big Data', 
        contributions: [
            'Implemented, benchmarked, tested, and profiled a concurrent sorting algorithm capable of sorting big data across multiple partitions, with custom comparators, and code generation.',
            'Implemented a history server that kept track of all stages, plans, and results of all queries.',
            'Exposed C++ math functionality to a Python library for developer friendly query execution.'
        ] 
    },
];