const express = require('express');
const flightRouter = require('./flightController')
const router = express.Router();

router.use(flightRouter);




module.exports = router;