import SeriesForm from "../components/admin/SeriesForm";
import SeriesList from "../components/series/SeriesList";


const SeriesAdminPage = () => {
    return (
        <section>
            <header>
                <h1>Serieadmin</h1>
                <SeriesForm/>
                <SeriesList/>
            </header>                        
        </section>
    )
}

export default SeriesAdminPage;