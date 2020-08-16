const Order = require('../models/order');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.send(orders)
})

router.get('/:number', async (req, res) => {
    try {
        const order = await Order.findOne({ number: req.params.number })
        res.send(order);
    } catch {
        res.status(404);
        res.send({ error: "Order doesn't exist"})
    }
    
})

router.post('/orders', async (req, res) => {
    console.log('POST')
    const order = new Order({

        number: req.body.number,
        fullPrice: req.body.fullPrice

    })
    
    await order.save()
    res.send(order);

})

router.delete('/orders/:number', async (req, res) => {
    try {
        await Order.deleteOne({ number: req.params.number })
        res.status(202).send();
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist" })
    }
})

module.exports = router;