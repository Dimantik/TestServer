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
    res.status(200)
    res.send({ "email": "Dimantik", "password": "201031" })
})

module.exports = router;