require('dotenv').config();
const express = require('express');
var _ = require('lodash');
var FlightService = require('../Services/FlightService')
const flightRouter = express.Router();
const axios = require('axios');



/**
 * POST: /getFlights
 * body: number of flight (for display)
 *       iata code
 * response: flights list
 */
flightRouter.post('/getFlights', (req, res) => {
    let params = {
        access_key: `${process.env.API_KEY}`,
    }
    params.arr_iata = _.isEmpty(req.body.iata)?"JFK":req.body.IATA;
    axios.get(process.env.BASE_URL, { params }).then(response => {
      const apiResponse = response.data;
      const flightService = new FlightService();
      const currFlights = flightService.getNFlight(apiResponse.data);
      if (_.isEmpty(JSON.stringify(currFlights))) {
          res.sendStatus(204)
      }
        res.send(JSON.stringify(currFlights))
        
    }).catch(err => {
      console.log(err);
      res.sendStatus(400)
      })
})




module.exports = flightRouter;