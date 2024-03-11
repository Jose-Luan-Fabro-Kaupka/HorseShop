package com.loja.horseshop.services;

import com.loja.horseshop.dtos.ProdutoRecordDTO;
import com.loja.horseshop.model.ProdutoModel;
import com.loja.horseshop.repositories.ProdutoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ProdutoService {
    @Autowired
    ProdutoRepository repository;

    public ProdutoModel salvarProduto(ProdutoRecordDTO produtoRecordDTO){
        var produtoModel = new ProdutoModel();
        BeanUtils.copyProperties(produtoRecordDTO, produtoModel);
        repository.insert(produtoModel);
        return produtoModel;
    }

    public List<ProdutoModel> consultarTodosProdutos(){
        return repository.findAll();
    }

    public Object consultarPorNomeProduto(String nome){
        Optional<ProdutoModel> produtoopt = repository.findByNome(nome);
        if(produtoopt.isEmpty()){
            throw new RuntimeException("Produto não encontrado");
        }
        return produtoopt.get();
    }

    public Object editarProduto(String nome, ProdutoRecordDTO produtoRecordDTO){
        Optional<ProdutoModel> produtoopt = repository.findByNome(nome);
        if(produtoopt.isEmpty()){
            throw new RuntimeException("Produto não encontrado");
        }

        ProdutoModel produto = produtoopt.get();
        BeanUtils.copyProperties(produtoRecordDTO, produto);
        ProdutoModel produtoAtualizado = repository.save(produto);

        return produtoAtualizado;
    }

    public Object excluirProduto(String nome){
        Optional<ProdutoModel> produtoopt = repository.findByNome(nome);
        if(produtoopt.isEmpty()){
            throw new RuntimeException("Produto não encontrado");
        }
        repository.delete(produtoopt.get());
        return "Produto excluido com sucesso";
    }
}
