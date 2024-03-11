import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private mensagemSubj = new BehaviorSubject<string[]>([])
  mensagem$: Observable<string[]> = this.mensagemSubj.asObservable();

  constructor() { }
  adicionarMensagem(mensagem: string): void{
    const mensagens = this.mensagemSubj.value.concat(mensagem);
    this.mensagemSubj.next(mensagens);
  }
}
