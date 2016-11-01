#!/usr/bin/env node
// Displays beadroom temp and humisity from Phant
// and outdoor temp and forcast from wunderground
// on SparkFun micro OLED display
// https://www.sparkfun.com/products/13003

console.log("Loading oled-spi...");
var oledspi = require('oled-spi');
var font    = require('oled-font-5x7');
var request = require('request');
var fs      = require('fs');
var util    = require('util'); 
var timeOut = 5*1000;       // On time

// spi options
var opts = {
    device: "/dev/spidev2.1",
    width:  128,
    height: 64,
    dcPin:  7,
    rstPin: 20
};
var oled = new oledspi(opts);

var filename = "/root/exercises/sensors/bic/bedKeys.json";
if(process.argv.length === 3) {
    filename = process.argv[2];
}
var keys = JSON.parse(fs.readFileSync(filename));
// console.log("Using: " + filename);
console.log("Title: " + keys.title);
// console.log(util.inspect(keys));

var url = keys.outputUrl + "/latest.json";
request(url, {timeout: 10000}, function (err, res, body) {
    if(err) {
        console.log("err: " + err);
    }
    // console.log("res: " + util.inspect(res));
    // console.log("body: " + body);
    var data = JSON.parse(body)[0];
    // console.log("data: " + data);
    // console.log("Temp: %d, Humidity: %d", (data.tempmid*9/5+32).toFixed(1),
            // (data.humidity*1).toFixed(1));
    var temperature = (data.tempmid*9/5+32).toFixed(1);
    var humidity    = (data.humidity*1).toFixed(1);
    
    oled.begin(function() {
        var xoff = 32;
        var yoff = 16;
        oled.turnOnDisplay();
        oled.clearDisplay();
        oled.setCursor(0+xoff, 0+yoff);
        oled.writeString(font, 1, 'Temp:', 1, true);
        oled.setCursor(0+xoff, 8+yoff);
        oled.writeString(font, 1, '    ' + temperature, 1, true);
        
        oled.setCursor(0+xoff, 16+yoff);
        oled.writeString(font, 1, 'Humid:', 1, true);
        oled.setCursor(0+xoff, 24+yoff);
        oled.writeString(font, 1, '    ' + humidity, 1, true);
        setTimeout(off, timeOut);
    });
});

var urlWeather = "http://api.wunderground.com/api/ec7eb641373d9256/conditions/forecast/q/IN/Brazil.json";
request(urlWeather, {timeout: 10000}, function(err, res, body) {
    if(err) {
        console.log("err: " + err);
    }
    var weather = JSON.parse(body);
    console.log("Temp:%s, lo:%s, hi:%s",
            weather.current_observation.temp_f,
            weather.forecast.simpleforecast.forecastday[0].low.fahrenheit,
            weather.forecast.simpleforecast.forecastday[0].high.fahrenheit
            );
});

function off () {
    oled.turnOffDisplay();
}

console.log("Ready...");