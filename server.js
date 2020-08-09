var express = require('express');
var app = express();


app.get('/api/user', function (req, res) {
    res.send('User');
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});