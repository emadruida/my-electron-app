import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  cliente: Cliente = {} as Cliente;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.getCliente(+id).subscribe(cliente => this.cliente = cliente);
    }
  }

  guardar(): void {
    this.clienteService.guardar(this.cliente).subscribe(_ => this.location.back());
  }

}
