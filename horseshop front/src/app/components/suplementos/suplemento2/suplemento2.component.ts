import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProdutosService } from '../../../services/produtos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suplemento2',
  templateUrl: './suplemento2.component.html',
  styleUrl: './suplemento2.component.css'
})
export class Suplemento2Component {
  quantidade: number = 0;

  suplemento2: Object = {
    nome: 'suplemento+horse+mais',
    valor: 800,
    img: '../../../assets/suplemento2.png', 
    quantidade: 1
  }

  constructor(private title: Title, private service: ProdutosService){
    this.title.setTitle("Suplemento Horse Mais");
  }

  adicionarAoCarrinho(){
    this.service.adicionarAoCarrinho(this.suplemento2).subscribe(
      response => {
        alert("Produto adicionado ao carrinho");
      }, error => {
        alert("Erro ao adicionar ao carrinho");
      }
    );
  }
}
