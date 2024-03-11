import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-racao1',
  templateUrl: './racao1.component.html',
  styleUrl: './racao1.component.css'
})
export class Racao1Component {
  quantidade: number = 1;
  
  racao1: Object = {
    nome: 'ração+agrozacca',
    valor: 120,
    img: '../../../assets/racao1.png', 
    quantidade: 1
  }

  constructor(private title: Title, private service: ProdutosService){
    this.title.setTitle("Ração Agrozacca");
  }

  adicionarAoCarrinho(){
    this.service.adicionarAoCarrinho(this.racao1).subscribe(
      response => {
        alert('Produto adicionado ao Carrinho');
      }, error => {
        alert('Erro ao adicionar ao carrinho');
      }
    );
  }
}
