const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    console.log('Hi there from the GET');
    console.log(__dirname);
    res.sendFile(__dirname+'/index.html');
});

app.post('/', function(req, res){
    console.log('Data sent');
    let num1 = Number(req.body.height);
    let num2 = Number(req.body.weight);

    let result = num2/(num1*num1);

    res.send('Your result is ' + result);
});

//send data to server with body-parsers

app.listen(2000, function(){
    console.log("Server started on port 3000");
});