import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Produto } from '../interfaces/produto.interface';
import { ProdutoPayload } from '../interfaces/payload-produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
 
  httpClient = inject(HttpClient);
  
  getAll(){
    return this.httpClient.get<Produto[]>('/api/produtos');
    }
  
  get(id: string){
    return this.httpClient.get<Produto>(`/api/produtos/${id}`);
    }
  
  post (payload: ProdutoPayload) {
    return this.httpClient.post('api/produtos', payload);
  }

  put (id: string, payload: ProdutoPayload) {
    return this.httpClient.put(`api/produtos/${id}`, payload);
  }

  delete (id: string){
    return this.httpClient.delete(`api/produtos/${id}`);
  }




}

  
 

