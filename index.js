const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const user = require('./routes/user.route');
const userProducts = require('./routes/user-product.route');
// const product = require('./routes/products.route');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then(
        () => {console.log("Connection with database established");},        
        err => {console.log("Failed to connect to MongoDB ", err);}
    );

app.use('/api/users', user);
// app.use('/api/product', product);
app.use('/api/users-products', userProducts);

app.listen(port, () => {
    console.log('Listening on port 3000');
});