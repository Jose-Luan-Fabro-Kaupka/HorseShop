import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProdutosService } from '../../../services/produtos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suplemento1',
  templateUrl: './suplemento1.component.html',
  styleUrl: './suplemento1.component.css'
})
export class Suplemento1Component {
  quantidade: number = 0;

  suplemento1: Object = {
    nome: 'suplemento+muscle+horse',
    valor: 330.00,
    img: '../../../assets/suplemento1.png', 
    quantidade: 1
  }

  constructor(private title: Title, private service: ProdutosService){
    this.title.setTitle("Suplemento Muscle Horse");
  }

  adicionarAoCarrinho(){
    this.service.adicionarAoCarrinho(this.suplemento1).subscribe(
      response => {
        alert("Produto adicionado ao carrinho");
      }, error => {
        alert("Erro ao adicionar ao carrinho");
      }
    );
  }
}
