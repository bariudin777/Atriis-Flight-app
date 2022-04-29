module.exports=class Flight {
    constructor(flightObject) {
        this.flightID = flightObject.departure.icao;
        this.departureTimeS = flightObject.departure.scheduled;
        this.departureTimeE =  flightObject.departure.estimated;
        this.iata = flightObject.departure.iata;
    }
    getFlightDetails(){
        return {
            flightId: this.flightID,
            departureTimeS: this.departureTime,
            departureTimeE: this.departureTime,
            iata:this.iata,
        }
    }
}
