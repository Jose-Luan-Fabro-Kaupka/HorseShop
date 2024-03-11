package com.loja.horseshop.repositories;

import com.loja.horseshop.model.UsuarioModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends MongoRepository <UsuarioModel, String> {
    Optional<UsuarioModel> findByNome(String nome);
}
