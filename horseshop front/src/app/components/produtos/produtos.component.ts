import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle("Produtos");
  }
  
  adicionarCarrinho(){

  }

  diminuirQuantidade(){

  }
  
}
