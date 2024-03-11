package com.loja.horseshop.dtos;

import com.mongodb.lang.NonNull;

public record UsuarioRecordDTO(@NonNull String nome, @NonNull String email, @NonNull String usuario, @NonNull String senha, @NonNull String funcao) {
}
