import type { ISeries } from "./ISeries"

export interface ISeriesContext {
	series: ISeries[]
	// man kan angi funskoner/metoder som noe skal inneholde: 
	addSeries: (newSeries: ISeries) => void //kontrakt om at serie har tilgangsmetode som tar imot ny serie og lagrer inni ISERIED dtaten returnerer ingenting 
	getNumberOfSeries: () => number
}