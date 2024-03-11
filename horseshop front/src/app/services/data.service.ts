import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }

  enviarMensagem(mensagem: any): Observable<any>{
    return this.http.post<any>(`${this.url}/mensagens`, mensagem);
  }

  reduzirProduto(produto: any): Observable<any>{
    return this.http.post<any>(`${this.url}/produtos`, produto);
  }
}
