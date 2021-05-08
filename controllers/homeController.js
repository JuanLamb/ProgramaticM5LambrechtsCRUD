

let homeController = {

    readAll: (req, res) => {
        
        res.render('home');
    },

    readAllCatalog: (req, res) => {
        res.render('products/productCatalog');
    }
};

module.exports = homeController;