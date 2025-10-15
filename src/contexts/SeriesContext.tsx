import { useState, createContext, Children, type ReactNode } from "react";
import type { ISeries } from "../interfaces/ISeries";
import type { ISeriesContext } from "../interfaces/ISeriesContext"; //instruksjon på hvordan serien skaø være bygget opp

/*gjdfdfg*/

export const SeriesContext = createContext<ISeriesContext | null>(null);
//betyr enten ser seriescontect en seriescontect eller så er den null 

type SeriesProps = { //definerer childrer og sier det er et react 
	children: ReactNode
}

export const SeriesProvider = ({children} : SeriesProps) => {
  /* dene her som kommer til å gjør eto ting
	nr 1 : sette opp staten eller evt flere ved behov
	2: definere alle tingangsmetorer gir tilgang til å hente selette oppdatede 
	3: den delen som gjrør at staten contexten kan deles med komponentene til de komponent
	ne som skal ha den  */

  const [series, setSeries] = useState<ISeries[]>([
    { title: "Naruto" },
    { title: "Game of Thrones" },
    { title: "Teletubbies" },
  ]);

  // immutability, spread operator->denne tar tak i alle de gamle seriene og sprer dem ut sammen med de nye
  const addSeries = (newSeries: ISeries): void => {
    setSeries(
      // lager ny array, ikke legge til i eksisterende
      (prev) => [newSeries, ...prev /*denne sprer ut */]
    );
  };

  const getNumberOfSeries = (): number => {
    return series.length;
  };
  //alle disse funskjonene lger vi fordi ISeriesContext sier vi skal gjøre det
  //siden vi har laget disse hat vi nå oppfylt kontrakten ,


  /**her kommer nå den biten som gir kpntexten til de komponentene som skal ha dem  */
  return (
	<SeriesContext.Provider value={ { /**her er eksporterinhen definert */ 
	series, addSeries, getNumberOfSeries } }>
		{children}
	</SeriesContext.Provider>
  )
}
