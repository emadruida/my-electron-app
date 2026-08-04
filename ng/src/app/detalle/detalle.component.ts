import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  resource
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-detalle',
  imports: [FormsModule],
  templateUrl: './detalle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent {
  private readonly clienteService = inject(ClienteService);
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);

  readonly cliente = resource<Cliente, number | null>({
    params: () => {
      const id = this.route.snapshot.paramMap.get('id');
      return id ? +id : null;
    },
    loader: async ({ params }) => {
      if (!params) {
        return {} as Cliente;
      }

      return firstValueFrom(this.clienteService.getCliente(params));
    }
  });

  guardar(): void {
    const cliente = this.cliente.value() ?? {} as Cliente;

    this.clienteService
      .guardar(cliente)
      .subscribe(() => this.location.back());
  }
}
