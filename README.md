# CRUD API em Node.js + PostgreSQL + Docker
Este repositório consiste em uma Application Programming Interface (API) que utiliza os métodos HTTP "CRUD" para
gerenciamento de produtos no banco de dados PostgreSQL.  
  
## Requisitos
Esta aplicação respeita os seguintes requisitos:  

- O nome do produto é obrigatório e deve ser único no sistema. Seu sistema deve permitir apenas um cadastro com o mesmo nome de produto.

- A descrição do produto é opcional, mas se fornecida, deve ter no máximo 500 caracteres.

- O preço do produto deve ser um valor positivo e é obrigatório.

- A quantidade em estoque do produto deve ser um valor inteiro positivo e é obrigatório.

- O sistema deve permitir a atualização de qualquer um dos campos do produto, respeitando as validações acima.

- O sistema deve permitir a visualização de um produto específico, bem como a listagem de todos os produtos cadastrados.

- O sistema deve permitir a exclusão de um produto.

- Este serviço deve ser RESTFul.  

### Payloads
POST /products

```json
{
    "name": "Nome do Produto",
    "description": "Descrição do Produto",
    "price": 100.00,
    "stock": 10
}
```

PUT /products/{productId}

```json
{
    "name": "Nome do Produto Atualizado",
    "description": "Descrição do Produto Atualizada",
    "price": 150.00,
    "stock": 15
}
```

GET /products/{productId}

```json
{
    "id": 1,
    "name": "Nome do Produto",
    "description": "Descrição do Produto",
    "price": 100.00,
    "stock": 10
}
```

GET /products

```json
[
    {
        "id": 1,
        "name": "Nome do Produto",
        "description": "Descrição do Produto",
        "price": 100.00,
        "stock": 10
    },
    ...
]
```
  
## Instruções
Para rodar o projeto na sua máquina execute os seguintes passos: 
- Verifique se você tem instalado Docker e Node/Nodemon. 
- Verifique também se não existe nenhum processo na sua máquina utilizando a porta 5432 (padrão do PostgreSQL).
- Baixe ou clone este repositório na sua máquina.
- Na raíz do repositório execute:
```
docker-compose up -d
```
- Instale as dependências do projeto:
```
npm install
```
- Agora já podemos subir nosso servidor Node:
```
node index.js
```
ou
```
nodemon index.js
```
- Pronto, você já pode criar os produtos (respeitando os requisitos) pelo Postman ou software de sua preferência e realizar os testes.