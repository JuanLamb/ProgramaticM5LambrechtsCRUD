const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');


router.get('/', productController.readAll);   /* LISTADO DE PRODUCTOS */

router.get('/create', productController.createProduct);  /* FORMULARIO DE CARGA */

router.get('/:id', productController.readProduct);    /* LEER PRODUCTO SEGUN ID */

router.post('/', productController.recieveForm);  /* RECIBE DATOS DEL FORMULARIO DE CREACION */

router.get('/edit/:id', productController.modifyProduct);  /* MODIFICA PRODUCTO SEGUN ID */

router.put('/', productController.modifyForm);   /* RECIBE FORMULARIO DE EDICION */

router.delete('/:id', productController.deleteProduct);  /* ELIMINA PRODUCTO  */


module.exports = router;
