const moment = require("moment");
const Flight = require("../Models/Flight")
const TIME_INTERVAL = 3;

module.exports = class FlightService{
    /**
     * 
     * @param {number} numberOfFlights 
     * @param {List<Object>} flightsRawData 
     * @returns 
     */
    getNFlight(flightsRawData) {
        const filteredFlightList = this.manageFlights(flightsRawData)
        return filteredFlightList;
    }
    /**
     * 
     * @param {List<Object>} list 
     * @returns 
     */
    manageFlights(list) {
        let currDayTime = moment().add(TIME_INTERVAL, "hour");
        const updatedList = list.filter((a) => {
            let time = moment(a.departure.scheduled)
            if (this.compareDate(time, currDayTime)) {
                return this.createFlightList(a);
            }
        })
        return updatedList;
    }
    /**
     * 
     * @param {Object} filteredFlightList 
     */
    createFlightList(flightObject) {
        const flight = new Flight(flightObject);
        return flight.getFlightDetails();
    }
    
    /**
     * 
     * @param {string} firstDate 
     * @param {string} secondDate 
     * @returns 
     */
    compareDate(dateTime,currDayDateTime) {
        //find the lower bound
        if (moment(dateTime).isAfter(currDayDateTime)) {
            let lowerBound = currDayDateTime;
            let upperBound = currDayDateTime.add(TIME_INTERVAL, 'hour');
            //if all between 
            if (!moment(dateTime).isBetween(lowerBound, upperBound)) {
                return true;
            }
        }
    }

}