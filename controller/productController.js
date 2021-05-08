let productsCatalog = require('../data/productsDataBase');
const fs = require('fs');

let productController = {

    readAll: (req, res) => {
        const selectedProduct = "";
        res.render('products', { productsCatalog, selectedProduct });
    },

    readProduct: (req, res) => {
        let productId = req.params.id;
        let selectedProduct = productsCatalog.find(product => {
            return product.id == productId
        });
        const productDiscount = selectedProduct.price - ((selectedProduct.price * selectedProduct.discount) / 100);
        res.render('productDetail', { selectedProduct, productDiscount })
    },

    createProduct: (req, res) => {
        res.send("Crear un producto");
    },

    recieveForm: (req, res) => {
        res.send("Recibe datos de formulario");
        //res.send(req.body)
    },

    modifyProduct: (req, res) => {
        res.send("Muestra el formulario para editar el producto " + req.params.id);
    },

    modifyForm: (req, res) => {
        res.send("Modificar producto");
    },

    deleteProduct: (req, res) => {
        res.send("Borra producto")
    },
};

module.exports = productController;