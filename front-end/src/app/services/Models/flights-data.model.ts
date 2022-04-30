export class FlightsData {
    data: Array<Flight> | undefined;
    numberOfFlights: number = 0;
    localTime: string | undefined;
}

export class Flight{
    departureTimeS: string|undefined;
    departureTimeE: string | undefined;
    iata: string | undefined;
    flightID:string | undefined;
}
