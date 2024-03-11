package com.loja.horseshop.controller;

import com.loja.horseshop.dtos.ProdutoRecordDTO;
import com.loja.horseshop.model.ProdutoModel;
import com.loja.horseshop.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @PostMapping("/produtos")
    public ResponseEntity<ProdutoModel> salvarProduto(@RequestBody @Validated ProdutoRecordDTO produtoRecordDTO){
        var produto = service.salvarProduto(produtoRecordDTO);
        return ResponseEntity.status(HttpStatus.OK).body(produto);
    }

    @GetMapping("/produtos")
    public ResponseEntity<List<ProdutoModel>> consultarTodosProdutos(){
        return ResponseEntity.status(HttpStatus.OK).body(service.consultarTodosProdutos());
    }

    @GetMapping("/produtos/{nome}")
    public ResponseEntity<Object> consultarPorNomeProduto(@PathVariable(value = "nome") String nome){
        try {
            var produto = service.consultarPorNomeProduto(nome);
            return ResponseEntity.status(HttpStatus.OK).body(produto);
        } catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.OK).body("Produto não encontrado");
        }
    }

    @PutMapping("/produtos/{nome}")
    public ResponseEntity<Object> editarProduto(@PathVariable(value = "nome") String nome, @RequestBody ProdutoRecordDTO produtoRecordDTO){
        try {
            var produto = service.editarProduto(nome, produtoRecordDTO);
            return ResponseEntity.status(HttpStatus.OK).body(produto);
        } catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado");
        }

    }

    @DeleteMapping("/produtos/{nome}")
    public ResponseEntity<Object> excluirProduto(@PathVariable(value = "nome") String nome){
        try {
            service.excluirProduto(nome);
            return ResponseEntity.status(HttpStatus.OK).body("Produto excluido com sucesso");
        } catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado");
        }
    }
}
