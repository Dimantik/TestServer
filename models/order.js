const mongoose = require('mongoose');

const orderScheme = mongoose.Schema(
    {
        number: Number,
        fullPrice: Number,
        programmerPayment: Number,
        netProfit: Number,
        startDate: Date,
        deadlineDate: Date,
        programmingLanguage: String,
        description: String

    }
);

const Order = mongoose.model('Order', orderScheme);

module.exports = Order;