// let productsCatalog = require('../data/productsDataBase');

let productController = {

    readAll: (req, res) => {
        res.render('productCatalog');
    },

    readProduct: (req, res) => {
        // let productId = req.params.id;
        // let selectedProduct = productsCatalog.find(product => {
        //     return product.id == productId
        // });
        res.render('products/productDetail');
    },

    // createProduct: (req, res) => {
    //     res.send("Crear un producto");
    // },

    // recieveForm: (req, res) => {
    //     res.send("Recibe datos de formulario");
    //     //res.send(req.body)
    // },

    // modifyProduct: (req, res) => {
    //     res.send("Muestra el formulario para editar el producto " + req.params.id);
    // },

    // modifyForm: (req, res) => {
    //     res.send("Modificar producto");
    // },

    // deleteProduct: (req, res) => {
    //     res.send("Borra producto")
    // },
};

module.exports = productController;