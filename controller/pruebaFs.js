let productsCatalog = require('../data/productsDataBase');
const fs = require('fs');



let funcion1 = function() {
    console.log('Leo productos de data');
    return productsCatalog;
};


console.log(funcion1());