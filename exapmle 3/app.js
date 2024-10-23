const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Dummy product data
const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
];

// Route for products page
// app.get('/products', (req, res) => {
//     res.render('products', { products });
// });
app.get('/products', (req, res) => {
    const searchQuery = req.query.search;
    let filteredProducts = products;

    if (searchQuery) {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    res.render('products', { products: filteredProducts });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});