import { useContext } from "react";
import { SeriesContext } from "../../contexts/SeriesContext";
import { type ISeriesContext } from "../../interfaces/ISeriesContext";
import SeriesItem from "./SeriesItem";

const SeriesList = () => {
  //denne linjen er oppkobling til context

  const { series } = useContext(SeriesContext) as ISeriesContext;

  const getSeriesJSX = () => {
    const seriesJSX = series.map((show, index) => {
      return ( 
        <SeriesItem 
        key={"series" + index}
        series={show}
        />
      )
    });
    return seriesJSX;
  };

  return (
    <section>
      <header>
        <h3>Serieliste</h3>
      </header>

      <section>{/* TODO: Generer serie-JSX her! */}</section>
      {getSeriesJSX()}
    </section>
  );
};

export default SeriesList;
