import type { ISeries } from "../../interfaces/ISeries";

const SeriesItem = ({series} : {series: ISeries}) => {
    return (
        <article>
            <h3>{series.title}</h3>
        </article>
    )
}

export default SeriesItem;