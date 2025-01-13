<ul>
    <li><span>Course 1</span></li>
    <li><span>Course 2</span></li>
    <li><span>Course 3</span></li>
</ul>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
        align-items: center;
    }

    li::before {
        content: "•";
        color: white;
        font-size: 1.5em;
        margin-right: 0.5em;
    }

    /* Add responsive behavior if needed */
    @media (max-width: 600px) {
        ul {
            grid-template-columns: 1fr;
        }
    }
</style>