const mongoose = require('mongoose');
const Order = require('../models/order');
const config = require('../config');

function setUpConnection() {
    mongoose.connect(config.db);
}

function getOrders() {
    return Order.find();
}

function getOrderByNumber(numberParam) {
    return Order.findOne({number: numberParam});
}

function updateOrder(data) {
    return Order.updateOne({number: data.number}, data);
}

function addOrder(order) {
    return Order.create(order);
}

function deleteOrder(numberParam) {
    return Order.deleteOne({number: numberParam});
}