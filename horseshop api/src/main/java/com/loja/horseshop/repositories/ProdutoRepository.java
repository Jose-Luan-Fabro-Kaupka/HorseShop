package com.loja.horseshop.repositories;

import com.loja.horseshop.model.ProdutoModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProdutoRepository extends MongoRepository<ProdutoModel, String> {
    Optional<ProdutoModel> findByNome(String nome);
}
