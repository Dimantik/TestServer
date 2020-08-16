const mongoose = require('mongoose');

const adminScheme = mongoose.Schema(
    {
        login: String,
        password: String,

        firstName: String,
        secondName: String
    }
)

const Admin = mongoose.model('Admin', adminScheme);

module.exports = Admin;