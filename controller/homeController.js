let productsCatalog = require('../data/productsDataBase');

let homeController = {

    readAll: (req, res) => {
    
        console.log('volvi del controlador');
        // let productId = req.params.id;
        let inSaleProducts = productsCatalog.filter(product => {
            return product.category == 'in-sale';
        });
        
        let visitedProducts = productsCatalog.filter(product => {
            return product.category == 'visited'
        });

        const selectedProduct = "";
        
        res.render('home', { inSaleProducts, visitedProducts, selectedProduct });
    },
};

module.exports = homeController;