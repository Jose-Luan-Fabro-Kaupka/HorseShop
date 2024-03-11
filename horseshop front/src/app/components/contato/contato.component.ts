import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  nome: string = '';
  email: string = '';
  mensagem: string = '';
  
  constructor(private titleService: Title, private DataService: DataService){
    this.titleService.setTitle('Contato');
  }

  enviarMensagem(){
    const mensagem = {
      nome: this.nome,
      email: this.email,
      mensagem: this.mensagem
    }

    console.log("Enviando");
    
    this.DataService.enviarMensagem(mensagem).subscribe((response) => {
      console.log('enviada');
    }, (error) => {
      console.log('erro');
    });
    this.limparTexto();
  }

  limparTexto(){
    this.nome = '';
    this.email = '';
    this.mensagem = '';
  }
}
