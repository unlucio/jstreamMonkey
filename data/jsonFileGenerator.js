var fs = require('fs');
var randomstring = require("randomstring");


var bigList = {
    error: null,
    foo: 'bar',
    products: []
};

for (var i = 0; i < 50000; i++) {
    bigList.products.push({
        name: randomstring.generate(),
        brand: randomstring.generate(7),
        price: Math.floor(Math.random()*1001),
        createdAt: new Date().getTime()
    });
}

fs.writeFileSync('data.json', JSON.stringify(bigList));