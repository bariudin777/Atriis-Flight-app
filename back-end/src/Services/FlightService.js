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
     */
    getNFlight(flightsRawData) {
        const filteredFlightList = this.manageFlights(flightsRawData)
        const flightList = this.convertToFlightList(filteredFlightList)
        return flightList;
    }
    /**
     * 
     * @param {*} filteredFlightList 
     * @returns 
     */
    convertToFlightList(filteredFlightList) {
        let res = [];
        if (!_.isEmpty(filteredFlightList)) {
            filteredFlightList.forEach(flight => {
                const f = new Flight(flight);
                res.push(f);
            });
        }
        return res;
    }
    /**
     * 
     * @param {List<Object>} list 
     * @returns 
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
     * @param {Object} filteredFlightList 
     */
    createFlightList(flightObject) {
        const flight = new Flight(flightObject);
        return flight.getFlightDetails();
    }
    
  /**
   * 
   * @param {string} dateTime 
   * @param {moment Object} currDayDateTime 
   * @returns 
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

