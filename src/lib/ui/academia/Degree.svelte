<h2>
    <span class="degree-header">Degree</span>
    <span class="degree-title">A.B. Computer Science</span>
    <span class="degree-school">Brown University</span>
</h2>

<style>
    @import './styles.css';

    h2 {
        display: flex;
        flex-direction: row;
    }

    span.degree-header {
        width: calc(var(--time-width) + var(--list-indentation));
    }

    span.degree-school, span.degree-title {
        font-weight: 400;
        font-size: var(--text-size-medium);
    }

    span.degree-title {
        width: 250px;
    }
</style>