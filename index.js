const express = require('express')

// inicializando o express
const app = express()
const port = '3000'

let livro = 'O código ...'
//escutando a porta 3000
app.listen(port)

//midlware
app.use(express.json())

//requisiçao GET
app.route('/').get((req, res) => res.send(livro))

//requisição POST
app.route('/').post((req, res) => res.send(req.body))

//requisição PUT
app.route('/').put((req, res) => {
    livro = req.body
    res.send(livro)
})

//requisição DELETE
app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})