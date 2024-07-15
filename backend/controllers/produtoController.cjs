const produtoModel = require("../models/produtoModel.cjs")

class ProdutoController{
  buscar(req, res){
  const listaProdutos = produtoModel.listar()
  return listaProdutos
  .then(produtos => res.status(200).json(produtos))
  .catch((error) => res.status(400).json(error.message))
  }

  buscar1(req, res){
    const { id } = req.params
    const listaProdutos = produtoModel.listar1(id)
    return listaProdutos
    .then(produtos => res.status(200).json(produtos))
    .catch((error) => res.status(400).json(error.message))
    }

  criar(req, res){
  const novoProduto = req.body
  const produto = produtoModel.criar(novoProduto)
  return produto
  .then(produtoCriado => res.status(200).json(produtoCriado))
  .catch(error => res.status(400).json(error.message))
  }

  alterar(req, res){
  const { id } = req.params
  const produtoAtualizado = req.body
  const produto = produtoModel.atualizar(produtoAtualizado, id)
  return produto
  .then((resultProdutoAtualizado) =>
  res.status(200).json(resultProdutoAtualizado) 
  )
  .catch((error) => res.status(400).json(error.message))
  }

  deletar(req, res){
  const { id } = req.params
  const produto = produtoModel.delete(id)
  return produto
  .then((resultProdutoDeletado) =>
  res.status(200).json(resultProdutoDeletado) 
  )
  .catch((error) => res.status(400).json(error.message)) 
  }
}

module.exports = new ProdutoController()