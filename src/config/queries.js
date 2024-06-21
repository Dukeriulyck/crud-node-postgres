const pool = require('./database')

const getProducts = (req, res) => {
    pool.query('SELECT * FROM products ORDER BY id ASC',(error,results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const createProduct = (req, res) => {
    const {name, description, price, stock} = req.body;

    pool.query('INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *', [
        name,
        description,
        price,
        stock
    ], (error, results) => {
        if (error){
            throw error;
        }
        res.status(201).send(`Produto adicionado com o ID: ${results.rows[0].id}`)
    });
};

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const {name, description, price, stock} = req.body;

    pool.query('UPDATE products SET name = $1, description = $2, price = $3, stock = $4 WHERE id = $5',[
        name, 
        description, 
        price, 
        stock,
        id
    ], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).send(`Produto modificado com o id: ${id}`);
    });
};

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    
    pool.query('DELETE FROM products WHERE id = $1',[id], (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).send(`Produto deletado com o id: ${id}`);
    });
};

module.exports = { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
 }