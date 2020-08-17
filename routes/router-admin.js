const Admin = require('../models/admin')
const router = require('express').Router()

router.get('/signin', (req, res) => {
    // const admin = Admin.findOne()

    // if (admin.login == req.body.login && admin.password == req.body.password) {
    //     res.status(200)
    //     res.send(admin)
    // } else {
    //     res.status(401)
    // }
    console.log("Try login " + req.query.email + " " + req.query.password)
    if (req.query.email == "Dimantik" && req.query.password == "201031") {
        console.log("Success")
        res.status(200)
        res.send({ "email": "Dimantik", "password": "201031" })
    } else {
        console.log("Failure")
        res.status(401)
        res.send();
    }
    
})

module.exports = router;