const moment = require("moment");
const Flight = require("../Models/Flight")
const TIME_INTERVAL = 3;
var _ = require('lodash');
let startDate = ""
let endDate = ""

module.exports = class FlightService{
    /**
     * 
     * @param {number} numberOfFlights 
     * @param {List<Object>} flightsRawData 
     * @returns 
     * Filters response and returns list of flight from current time +N for N hours forward
     */
    getNFlight(flightsRawData,iata) {
        const filteredArrivals = this.manageFlights(flightsRawData,'arrival');
        const filteredDepartures = this.manageFlights(flightsRawData, 'departure');
        const filteredFlightList = [...filteredArrivals, ...filteredDepartures]
        const flightData = this.convertToFlightList(filteredDepartures,iata)
        return flightData;
    }
    /**
     * 
     * @param {Array of Objects} filteredFlightList 
     * @returns
     * Create response
     */
    convertToFlightList(filteredFlightList,iata) {
        let flightList = [];
        if (!_.isEmpty(filteredFlightList)) {
            filteredFlightList.forEach(flight => {
                const f = new Flight(flight);
                flightList.push(f);
            });
        }
        return {
            data: flightList,
            numberOfFlights: flightList.length,
            localTime: moment.utc().format(),
            iata: iata,
            startTime: moment.utc(startDate).format("h:mm"),
            endTime: moment.utc(endDate).format("h:mm"),
        };
    }
    /**
     * 
     * @param {List<Object>} list 
     * @returns 
     * Iters on response data and filters the flights 
     */
    manageFlights(list,index) {
        startDate = moment().utc().add(TIME_INTERVAL * 2, "hour").format();
        endDate = moment().utc().add(TIME_INTERVAL * 3, "hour").format();
        const updatedList = list.filter((a) => {
            let dtToCheck = moment.utc(a[`${index}`].scheduled).format()
            if (this.compareDate(dtToCheck,startDate,endDate)) {
                return a
            }
        })
        return updatedList;
    }

/**
   * 
   * @param {string} dateTime 
   * @param {moment Object} currDayDateTime 
   * @returns
   * Compare function- using moment
   */
    compareDate(dtToCheck,startDate,endDate) {

    if (moment(dtToCheck).isBetween(startDate, endDate)) {
            return true;
        }
        else {
            return false;
        }
    }
}

