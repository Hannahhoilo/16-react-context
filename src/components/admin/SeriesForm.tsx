import { type ISeriesContext } from "../../interfaces/ISeriesContext";
import { SeriesContext } from "../../contexts/SeriesContext";
import { useContext } from "react";

const SeriesForm = () => {
  const { addSeries, getNumberOfSeries } = useContext(
    SeriesContext
  ) as ISeriesContext;

  const addNewSeries = () => {
    addSeries({ title: "Death Note" });
  };

  return (
    <section>
      <h3>Legg til ny serie </h3>
      <p>Antall serier: {getNumberOfSeries()} </p>
      <div>
        <label>Tittel</label>
        <input type="text" />
        <button onClick={addNewSeries}>Legg til</button>
      </div>
    </section>
  );
};

export default SeriesForm;
