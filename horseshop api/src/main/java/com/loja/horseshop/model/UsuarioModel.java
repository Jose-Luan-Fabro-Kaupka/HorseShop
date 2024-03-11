package com.loja.horseshop.model;

import com.mongodb.lang.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "usuarios")
public class UsuarioModel implements Serializable {
    private static final long SerialVersionUID = 1L;

    @Id
    @NonNull
    private String id;
    @NonNull
    private String nome;
    @NonNull
    private String email;
    @NonNull
    private String usuario;
    @NonNull
    private String senha;
    @NonNull
    private String funcao;

    @NonNull
    public String getId() {
        return id;
    }

    public void setId(@NonNull String id) {
        this.id = id;
    }

    @NonNull
    public String getNome() {
        return nome;
    }

    public void setNome(@NonNull String nome) {
        this.nome = nome;
    }

    @NonNull
    public String getEmail() {
        return email;
    }

    public void setEmail(@NonNull String email) {
        this.email = email;
    }

    @NonNull
    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(@NonNull String usuario) {
        this.usuario = usuario;
    }

    @NonNull
    public String getSenha() {
        return senha;
    }

    public void setSenha(@NonNull String senha) {
        this.senha = senha;
    }

    @NonNull
    public String getFuncao() {
        return funcao;
    }

    public void setFuncao(@NonNull String funcao) {
        this.funcao = funcao;
    }
}
