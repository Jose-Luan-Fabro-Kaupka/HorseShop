import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-racao2',
  templateUrl: './racao2.component.html',
  styleUrl: './racao2.component.css'
})
export class Racao2Component {
  quantidade: number = 1;

  racao2: Object = {
    nome: 'ração+potence',
    valor: 95.00,
    img: '../../../assets/racao2.png', 
    quantidade: 1
  }


  constructor(private title: Title, private service: ProdutosService){
    this.title.setTitle("Ração Potence");
  }

  adicionarAoCarrinho(){
    this.service.adicionarAoCarrinho(this.racao2).subscribe(
      response => {
        alert("Produto adicionado ao carrinho");
    }, error => {
        alert("Erro ao adicionar ao carrinho")
    });
  }
}
