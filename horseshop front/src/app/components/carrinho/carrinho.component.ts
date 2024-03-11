import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  produtos: any = [];

  constructor(private titleService: Title, private service: ProdutosService){
    this.titleService.setTitle('Carrinho');
    this.carregarProdutos();
  }

  calcularTotal(): number{
    if (this.produtos.length === 0) {
      return 0;
    }
    return this.produtos.reduce((total: number, produto: any) => total + produto.valor, 0);
  }

  carregarProdutos(): void{
    this.service.carregarProdutos().subscribe(
      (response: any[]) => {
        this.produtos = response;
      }, error => {
        alert("error");
      }
    );
  }

  desformatarNome(nome: string): string{
    return this.service.desformatarNome(nome);
  }

  remover(nome: string){
    this.service.removerDoCarrinho(nome).subscribe(
      response => {
        this.carregarProdutos();
        window.location.reload();
      }, error => {
        console.log(error);
        window.location.reload();
      }
    );
  }
}
