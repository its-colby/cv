export interface Role {
    title: string;
    company: string;
    time: string;
    bullets: string[];
}

export const roles: Role[] = [
    {
        title: 'Product Manager',
        company: 'Subspace Labs',
        time: '2023 - 2024',
        bullets: [
            'Advanced 5 concepts to POCs, with 2 progressing to MVPs + partnerships', 
            'Advanced a blockchain SDK from POC to release',
            'Designed a new identity scheme, leveraging proof of personhood, ZKPs, MPC, VCs, and PKI',
            'Designed a new blockchain-based file storage system w/ CDN, gateways, and bandwidth optimizations',
            'Redirected resources away from numerous futile products and features'
        ]
    },
    {
        title: "Business Consultant",
        company: "Tangible",
        time: "2023",
        bullets: ["Developed and maintained software systems", "Led a team of developers"]
    },
    {
        title: "Head of Product",
        company: "Hence Labs",
        time: "2022",
        bullets: [
            'Advanced an entire blockchain ecosystem from concept to MVP',
            'Reduced management and non-essential roles, while expanding core engineering and quality assurance',
            'Removed 90% of internal documentation and replaced with a few essential sources of truth',
            'Served as the face and voice of an 8 minute professionally produced marketing video',
            'Designed an innovative BFT leaderless consensus algorithm, leveraging QUIC and geographic location',
            'Designed an innovative blockchain architecture and network economics approach'
        ]
    },
    {
        title: "Product Consultant",
        company: "Hence Labs",
        time: "2022",
        bullets: ["Developed and maintained software systems", "Led a team of developers"]
    },
    {
        title: "Product Owner",
        company: "MakerDAO",
        time: "2022 - 2023",
        bullets: ["Developed and maintained software systems", "Led a team of developers"]
    },
    {
        title: "Product Consultant",
        company: "MakerDAO",
        time: "2021",
        bullets: ["Developed and maintained software systems", "Led a team of developers"]
    },
]