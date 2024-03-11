package com.loja.horseshop.dtos;

import com.mongodb.lang.NonNull;

public record ProdutoRecordDTO(@NonNull String nome, @NonNull double valor, @NonNull String img, @NonNull int quantidade) {
}
