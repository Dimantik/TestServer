const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const routerOrders = require('./routes/router-orders')
const routerAdmin = require('./routes/router-admin')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use('/api/orders', routerOrders)
app.use('/api/admin', routerAdmin)

app.listen(config.port, () => {
    console.log("Server has started!")
})

// mongoose
//     .connect(config.db_url_dev, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then( () => {
        
//     })


