import { Component, inject, signal } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  private clienteService = inject(ClienteService);

  clientes = signal<Cliente[]>([]);

  constructor() {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getAll().subscribe(clientes => this.clientes.set(clientes));
  }

  borrar(id: number): void {
    this.clienteService.borrar(id).subscribe(_ => this.getClientes());
  }
}
