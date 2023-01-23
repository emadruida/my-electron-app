import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL = 'http://localhost:3000/clientes/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.URL);
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.URL + id);
  }

  guardar(cliente: Cliente): Observable<Cliente> {
    if (cliente.id) {
      return this.updateCliente(cliente);
    } else {
      return this.addCliente(cliente);
    }
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.URL + cliente.id, cliente);
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.URL, cliente);
  }

  borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + id);
  }
}
