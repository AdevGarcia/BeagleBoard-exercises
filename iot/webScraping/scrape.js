#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');

// Let's scrape Incrediables
var url = 'http://www.imdb.com/title/tt0317705/';

request(url, function(error, response, html){
	if(!error){
		var $ = cheerio.load(html);

		var title, release, rating;
		var json = { title : "", release : "", rating : ""};

		$('.header').filter(function(){
	        var data = $(this);
	        title = data.children().first().text();
	        release = data.children().last().children().text();

	        json.title = title;
	        json.release = release;
        });

        $('.star-box-giga-star').filter(function(){
        	var data = $(this);
        	rating = data.text();

        	json.rating = rating;
        });
	}

	console.log(json);

});
	