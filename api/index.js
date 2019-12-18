const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const cors = require('cors')

const tile38 = require('tile38');
const client = new tile38({
    host: 'ec2-13-229-128-44.ap-southeast-1.compute.amazonaws.com',
    debug: true
});

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//API Routes
app.get('/beam', async (req, res) => {

    //Get all the Beams in the fleet
    let result = await client.scanQuery('fleet').execute()
    res.send(result)
})
app.get('/beam/search', async (req, res) => {
    const {lat, lng, radius = 2, numberOfScooters = 10} = req.query;

    //Validate lat and lng
    if(!lat || !lng)
        res.status(500).send('Invalid Coordinates')

    //Do search in the Tile38 DB
    let result = await client.withinQuery('fleet')
        .circle(
            lat,
            lng,
            radius
        )
        .limit(numberOfScooters)
        .execute();
    res.send(result)
})

app.post('/beam/add', (req, res) => {
    const {lat, long} = req.body;

    //Validate lat and lng
    if(!lat || !long)
        res.status(500).send('Invalid Coordinates')

    //Create new Beam in the point
    client.set('fleet', `beam${new Date().getMilliseconds()}`, [lat, long]).then(() => {
        res.send('Beam created!')
    })
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))