const app = require('./src/routes/productsRoutes');

const port = 3000;

app.listen(port, ()=> {
    console.log(`Aplicação rodando na porta ${port}.`);
});