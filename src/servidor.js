const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./bancoDeDados')

app.use(express.urlencoded({ extended: true }))


app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    }) 
     res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    }) 
     res.send(produto)
})

app.listen(porta, () => {
    console.log(`Escutando na porta ${porta}`)
})
