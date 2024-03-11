package com.loja.horseshop.controller;

import com.loja.horseshop.dtos.UsuarioRecordDTO;
import com.loja.horseshop.model.UsuarioModel;
import com.loja.horseshop.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @PostMapping("/usuarios")
    public ResponseEntity<UsuarioModel> registrarUsuario(@RequestBody @Validated UsuarioRecordDTO usuarioRecordDTO){
        var produto = service.registrarUsuario(usuarioRecordDTO);
        return ResponseEntity.status(HttpStatus.OK).body(produto);
    }

    @GetMapping("/usuarios")
    public ResponseEntity<List<UsuarioModel>> consultarTodosUsuarios(){
        return ResponseEntity.status(HttpStatus.OK).body(service.consultarTodosUsuarios());
    }

    @GetMapping("/usuarios/{nome}")
    public ResponseEntity<Object> consultarUsuarioPorNome(@PathVariable(value = "nome") String nome){
        try {
            var usuario = service.consultarUsuarioPorNome(nome);
            return ResponseEntity.status(HttpStatus.OK).body(usuario);
        } catch(RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
        }
    }

    @PutMapping("/usuarios/{nome}")
    public ResponseEntity<Object> editarUsuario(@PathVariable(value = "nome") String nome, @RequestBody @Validated UsuarioRecordDTO usuarioRecordDTO){
        try {
            var usuario = service.editarUsuario(nome, usuarioRecordDTO);
            return ResponseEntity.status(HttpStatus.OK).body(usuario);
        } catch(RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
        }
    }

    @DeleteMapping("/usuarios/{nome}")
    public ResponseEntity<Object> excluirUsuario(@PathVariable(value = "nome") String nome){
        try {
            service.excluirUsuario(nome);
            return ResponseEntity.status(HttpStatus.OK).body("Usuário excluido com sucesso");
        } catch(RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
        }
    }
}
