import { Location } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-detalle',
    imports: [FormsModule],
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {

  private clienteService = inject(ClienteService);
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  cliente = signal<Cliente>({} as Cliente);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.getCliente(+id).subscribe(cliente => this.cliente.set(cliente));
    }
  }

  guardar(): void {
    this.clienteService.guardar(this.cliente()).subscribe(_ => this.location.back());
  }

}
