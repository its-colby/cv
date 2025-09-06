export enum AboutMeKind {
    INTRODUCTION = 'Introduction',
    PROFESSIONAL = 'Professional',
    PERSONAL = 'Personal',
}

export const about_me = [
    {
        kind: AboutMeKind.INTRODUCTION,
        text: 'Hello! My name is Colby!'},
    {
        kind: AboutMeKind.PROFESSIONAL,
        text: "I am obsessed with abstractions and certainty. Naturally, this leads me to love pure mathematics and formal logic. And because of my strong background in various areas of computer science (cryptography and systems/software architecture in particular), I've landed in the field of programming language theory, more specifically 'applied type theory'."},
    {
        kind: AboutMeKind.PERSONAL,
        text: "I've played just about every sport (team and outdoor) growing up, but these days, I spend most of my free time theorizing about random subjects. I also love interacting with new people and joking around!!"
    },

]

