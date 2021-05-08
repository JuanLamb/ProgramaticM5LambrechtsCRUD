const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require('path');
app.use(express.static('public'));

app.set('view engine', 'ejs');

const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');

app.use('/', homeRouter);
app.use('/', userRouter);
app.use('/products', productsRouter);


app.listen(port || 3000, () => {
    console.log('Servidor corriendo en puerto ');
});