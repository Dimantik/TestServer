var express = require('express');
var app = express();


app.use('/api/order', function (req, res, next) {
    console.log('First Func!');
    next();
})

app.get('/api/order', function (req, res) {
    console.log('Connect!');
    res.send({
        "number":  235436,
        "price":  1000
    });
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});