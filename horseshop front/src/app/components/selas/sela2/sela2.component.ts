import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProdutosService } from '../../../services/produtos.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-sela2',
  templateUrl: './sela2.component.html',
  styleUrl: './sela2.component.css'
})
export class Sela2Component {
  quantidade: number = 0;

  sela2: Object = {
    nome: 'sela+mangalarga+marchador',
    valor: 850,
    img: '../../../assets/sela2.png', 
    quantidade: 1
  }

  constructor(private title: Title, private service: ProdutosService){
    this.title.setTitle("Sela Mangalarga Marchador");
  }

  adicionarAoCarrinho(){
    this.service.adicionarAoCarrinho(this.sela2).subscribe(
      response => {
        alert("Produto adicionado ao carrinho");
      }, error => {
        alert("Erro ao adicionar ao carrinho");
      }
    );
  }
}
