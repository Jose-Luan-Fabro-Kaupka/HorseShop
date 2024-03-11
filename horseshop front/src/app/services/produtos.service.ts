import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap, throwError } from 'rxjs';

interface Produto {
  nome: string,
  valor: Number,
  img: string, 
  quantidade: Number
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url = 'http://localhost:8080/produtos';


  constructor(private http: HttpClient) { }

  adicionarAoCarrinho(produto: any): Observable<any>{
    return this.http.get<any[]>(`${this.url}`).pipe(
      switchMap(produtos => {
        const produtoExistente = produtos.find(p => p.nome === produto.nome);
        if (produtoExistente) {
          produtoExistente.quantidade += produto.quantidade;
          return this.http.put(`${this.url}/${produtoExistente.nome}`, produtoExistente);
        } else {
          return this.http.post<any>(this.url, produto);
        }
      })
    );
  }

  carregarProdutos(): Observable<any>{
    return this.http.get<Produto[]>(`${this.url}`).pipe(
      map(produtos => {
        return produtos.map(produto => {
          produto.nome = this.formatarNome(produto.nome);
          return produto;
        });
      }));
  }

  removerDoCarrinho(nome: string): Observable<any>{
    return this.http.get<any[]>(`${this.url}/${nome}`).pipe(switchMap((produtos) => {
      if(produtos.length === 0){
        return throwError("Produto não encontrado no carrinho " + `${this.url}/${nome}`);
      }
      return this.http.delete<any>(`${this.url}/${nome}`);
    }))
  }

  formatarNome(nome: string): string{
    const palavras = nome.split('+');
    const nomeFormatado = palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
    return nomeFormatado;
  }

  desformatarNome(nome: string): string{
    const palavras = nome.split(' ');
    const nomeDesformatado = palavras.map(palavra => palavra.charAt(0).toLowerCase() + palavra.slice(1)).join('+');
    return nomeDesformatado;
  }
}
