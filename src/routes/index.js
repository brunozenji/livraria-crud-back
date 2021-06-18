const express = require('express');
const { Livro } = require('../models');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello World.');
})

//Listar todos
router.get('/livros', async (req, res) => {
    const livros = await Livro.findAll();
    
    res.json({ sucess: true, data: livros });
});

// Criar
router.post('/livros', async (req, res) => {

    let { titulo, autor } = req.body;

    if(!titulo || !autor) {
        res.json({ sucess: false, data: "Requisição inválida. Preencha todos os campos" });
    }

    const livro = await Livro.create(req.body);
    res.json(livro);
});

//Buscar
router.get('/livros/:id', async (req, res) => {

    if(!isNaN(req.params.id)) {

    }

    const livro = await Livro.findAll({
        where: {
            id: req.params.id
        }
    })
    res.json(livro);
});

 //Editar
router.put('/livros/:id', async (req, res) => {
    console.log('req', req.body);
    console.log('id', req.params.id);

    const livro = await Livro.update(req.body, {
        where: {
            id: req.params.id
        }
    })

    res.json(livro);
});

//Deletar
router.delete('/livros/:id', async (req, res) => {
    const livro = await Livro.destroy({
        where: {
            id: req.params.id
        }
    })

    res.send('deletado');
});

module.exports = router;