const express = require('express');
const rotas = express.Router();

let clientes = [];

rotas.get('/', (req, res) => {
    res.json(clientes);
});

rotas.post('/', (req, res) => {
    const cliente = req.body;
    clientes.push(cliente);
    res.status(201).json({ message: 'Cliente adicionado!', cliente });
});

rotas.put('/:id', (req, res) => {
    const { id } = req.params;
    const clienteAtualizado = req.body;
    clientes = clientes.map(c => (c.id === id ? clienteAtualizado : c));
    res.json({ message: 'Cliente atualizado!', clienteAtualizado });
});

rotas.delete('/:id', (req, res) => {
    const { id } = req.params;
    clientes = clientes.filter(c => c.id !== id);
    res.json({ message: 'Cliente removido!' });
});

module.exports = rotas;