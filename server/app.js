var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var rpio = require('rpio');

const DATA = 12;

app.use(cors());
// var VCC = 12;
// var DATA = 10;
// var GND = 8;
// rpio.open(GND, rpio.OUTPUT, rpio.LOW);
// rpio.open(VCC, rpio.OUTPUT, rpio.HIGH);
// rpio.open(DATA, rpio.OUTPUT);
// rpio.write(GND, rpio.LOW);
// rpio.write(VCC, rpio.HIGH);


app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log("Server's up at http://localhost:3000!");
});
