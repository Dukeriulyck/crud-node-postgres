const express = require('express');
const bodyParser = require('body-parser')
const queries = require('../config/queries');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/',(req, res)=> {
    res.json({info: 'API usando Node, Express e Postgres! Legal, né?'});
});

app.get('/products', queries.getProducts);
app.get('/products/:id', queries.getProductById);
app.post('/products', queries.createProduct);
app.put('/products/:id', queries.updateProduct);
app.delete('/products/:id', queries.deleteProduct);

module.exports = app;