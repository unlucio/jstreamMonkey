var http = require('http'),
    request = require('request'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');

function fetchJson(url) {
    console.log('fetching: '+url);

    var fetcher = http.get(url, function(response) {
        var json = '';
        response.on('data', function(chunk) {
            json += chunk;
            console.log('\n - banana chunk: ', chunk.toString());
        });

        response.on('end', function() {
            console.log('\n\n ---- I got '+JSON.parse(json).length+' json bananas ----\n');
        });

    });

    fetcher.on('error', function(error) {
        console.log('Monkey got an error!!! ', error);
    });
}

//fetchJson('http://localhost:3000/data');



request({url: 'http://localhost:3000/data'})
    .pipe(JSONStream.parse('products.*'))
    .pipe(es.mapSync(function (data) {
        console.log('\n - banana slice : ', data);
        //return data;
    }));