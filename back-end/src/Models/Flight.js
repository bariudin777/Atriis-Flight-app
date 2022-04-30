const moment = require("moment");
module.exports = class Flight {
    constructor(flightObject) {
        this.flightID = flightObject.departure.icao;
        this.departureTimeS = moment(flightObject.departure.scheduled).format("h:mm");
        this.departureTimeE = moment(flightObject.departure.estimated).format("h:mm");
        this.iata = flightObject.departure.iata;
    }
    /**
     * getFlightDetails
     * @returns 
     * return response details
     */
    getFlightDetails(){
        return {
            flightId: this.flightID,
            departureTimeS: this.departureTimeS,
            departureTimeE: this.departureTimeE,
            iata: this.iata,
        }
    }
}
