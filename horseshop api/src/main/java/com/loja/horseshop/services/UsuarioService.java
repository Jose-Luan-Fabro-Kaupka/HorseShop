package com.loja.horseshop.services;

import com.loja.horseshop.dtos.UsuarioRecordDTO;
import com.loja.horseshop.model.UsuarioModel;
import com.loja.horseshop.repositories.UsuarioRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository repository;

    public UsuarioModel registrarUsuario(UsuarioRecordDTO usuarioRecordDTO){
        var usuarioModel = new UsuarioModel();
        BeanUtils.copyProperties(usuarioRecordDTO, usuarioModel);
        repository.insert(usuarioModel);
        return usuarioModel;
    }

    public List<UsuarioModel> consultarTodosUsuarios(){
        return repository.findAll();
    }

    public Object consultarUsuarioPorNome(String nome){
        Optional<UsuarioModel> usuarioopt = repository.findByNome(nome);
        if(usuarioopt.isEmpty()){
            throw new RuntimeException("Usuário não encontrado");
        }
        return usuarioopt.get();
    }

    public Object editarUsuario(String nome, UsuarioRecordDTO usuarioRecordDTO){
        Optional<UsuarioModel> usuarioopt = repository.findByNome(nome);
        if(usuarioopt.isEmpty()){
            throw new RuntimeException("Usuário não encontrado");
        }
        UsuarioModel usuarioModel = usuarioopt.get();
        BeanUtils.copyProperties(usuarioRecordDTO, usuarioModel);
        UsuarioModel usuarioAtualizado = repository.save(usuarioModel);

        return usuarioAtualizado;
    }

    public Object excluirUsuario(String nome){
        Optional<UsuarioModel> usuarioopt = repository.findByNome(nome);
        if(usuarioopt.isEmpty()){
            throw new RuntimeException("Usuário não encontrado");
        }
        repository.delete(usuarioopt.get());
        return "Usuário excluído com sucesso";
    }
}
