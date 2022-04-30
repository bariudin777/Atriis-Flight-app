const { utc } = require("moment");
const moment = require("moment");
const Flight = require("../Models/Flight")
const TIME_INTERVAL = 3;
var _ = require('lodash');

module.exports = class FlightService{
    /**
     * 
     * @param {number} numberOfFlights 
     * @param {List<Object>} flightsRawData 
     * @returns 
     * Filters response and returns list of flight from current time +N for N hours forward
     */
    getNFlight(flightsRawData) {
        const filteredFlightList = this.manageFlights(flightsRawData)
        const flightData = this.convertToFlightList(filteredFlightList)
        return flightData;
    }
    /**
     * 
     * @param {Array of Objects} filteredFlightList 
     * @returns
     * Create response
     */
    convertToFlightList(filteredFlightList) {
        let res = [];
        if (!_.isEmpty(filteredFlightList)) {
            filteredFlightList.forEach(flight => {
                const f = new Flight(flight);
                res.push(f);
            });
        }
        return { data: res, time:moment().format()};
    }
    /**
     * 
     * @param {List<Object>} list 
     * @returns 
     * Iters on response data and filters the flights 
     */
    manageFlights(list) {
        let startDate = moment().utc().add(TIME_INTERVAL*2, "hour").format();
        let endDate = moment().utc().add(TIME_INTERVAL*3, "hour").format();
        const updatedList = list.filter((a) => {
            let dtToCheck = moment.utc(a.departure.scheduled).format()
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

