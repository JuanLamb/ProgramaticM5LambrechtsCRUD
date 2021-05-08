const express = require('express');
const app = express();
const port = process.env.PORT;

const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

const path = require('path');
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', homeRouter);
// app.use('/', userRouter);
app.use('/products', productRouter);


app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

// app.get('/productDetail', (req, res) => {
//     res.render('productDetail');
// });


app.listen(port || 3000, () => {
    console.log('Servidor corriendo en puerto ');
});
