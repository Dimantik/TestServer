var express = require('express');
var app = express();


app.get('/api/order', function (req, res) {
    res.send({
        "number": 235,
        "price": 1000
    });
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});