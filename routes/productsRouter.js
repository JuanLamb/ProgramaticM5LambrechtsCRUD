const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');


router.get('/', productController.readAll);   /* LISTADO DE PRODUCTOS RENDERIZA CATALOGO DE PRODUCTOS*/

// router.get('/create', productController.createProduct);  /* FORMULARIO DE CARGA */

router.get('/productDetail', productController.readProduct);    /* LEER PRODUCTO SEGUN ID !!!!!!!!CAMBIAR /productDetail por /:id al implementar JSON!!!!!!!!!!!!!!!!!!!!*/

// router.post('/', productController.recieveForm);  /* RECIBE DATOS DEL FORMULARIO DE CREACION */

// router.get('/edit/:id', productController.modifyProduct);  /* MODIFICA PRODUCTO SEGUN ID */

// router.put('/', productController.modifyForm);   /* RECIBE FORMULARIO DE EDICION */

// router.delete('/:id', productController.deleteProduct);  /* ELIMINA PRODUCTO  */


module.exports = router;