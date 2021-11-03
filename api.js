var Categorias = require('./Categorias');
const dbcategoria = require('./dbcategoria');

// requerido en todos
var express = require('express');
var cors = require('cors');
const { request, response } = require('express');
const bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router); //Ruta principal

router.route('/categoria').get((request,response)=>{

    dbcategoria.getCategoria().then(result => {
        response.json(result)
    })

})

router.route('/categoria/:id').get((request,response)=>{

    dbcategoria.getCategoria_x_id(request.params.id).then(result => {
        response.json(result)

    })

})

router.route('/categoria/guardar').post((request,response)=>{
    let categoria = {...request.body}
    dbcategoria.insertCategoria(categoria).then(result => {
        response.json(result)

    })

})

router.route('/categoria/actualizar').post((request,response)=>{
    let categoria = {...request.body}
    dbcategoria.updateCategoria(categoria).then(result => {
        response.json(result)

    })

})

router.route('/categoria/borrar/:id').get((request,response)=>{
    let categoria = {...request.body}
    dbcategoria.deleteCategoria(request.params.id).then(result => {
        response.json(result)

    })

})

var port = process.env.PORT || 8090;

app.listen(port);

console.log('Categoria Api Iniciado en el puerto ' + port);