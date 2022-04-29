const express = require('express')
const cors = require('cors')
const routes = require('./Controllers/routes');
const app = express();


const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.get('/', (_req, res) => {res.send("in root");})


app.listen(port, () => {
   console.log(`listening to port: ${port}`)
})