import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProdutosService } from '../../../services/produtos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sela1',
  templateUrl: './sela1.component.html',
  styleUrl: './sela1.component.css'
})

export class Sela1Component {
  quantidade: number = 0;

  sela1: Object = {
    nome: 'sela+freio+de+ouro',
    valor: 800.00,
    img: '../../../assets/sela1.png', 
    quantidade: 1
  }

  constructor(private title: Title, private service: ProdutosService){
    this.title.setTitle("Sela Freio de Ouro");
  }

  adicionarAoCarrinho(){
    this.service.adicionarAoCarrinho(this.sela1).subscribe(
      response =>{
        alert("Produto adicionado ao carrinho");
      }, error => {
        alert("Erro ao adicionar ao carrinho");
      }
    );
  }

}
