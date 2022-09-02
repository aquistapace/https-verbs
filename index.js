const express = require('express')

// inicializando o express
const app = express()
const port = '3000'

//escutando a porta 3000
app.listen(port)

let genero = 'Aventura'

//midlware
app.use(express.json())

//requisiçao GET
app.route('/').get((req, res) => res.send(genero))

//requisiçao GET com Route Params
app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
app.route('/pagina/:variavel').get((req, res) => res.send(req.params.variavel))
//requisiçao GET com Query Params
app.route('/sobre/').get((res, req) => res.send(req.query))

//requisição POST com Body Params
app.route('/').post((req, res) => res.send(req.body))
app.route('/').post((req, res) => {
    const { livro, autor } = req.body
    res.send(`O ${livro} foi escrito por ${autor}`)
})

//requisição PUT
app.route('/').put((req, res) => {
    genero = req.body
    res.send(genero)
})

//requisição DELETE
app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})