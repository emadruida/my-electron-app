import {
  ChangeDetectionStrategy,
  Component,
  inject,
  resource
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listado',
  imports: [FormsModule, RouterLink],
  templateUrl: './listado.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent {
  private readonly clienteService = inject(ClienteService);

  readonly clientes = resource({
    loader: () => firstValueFrom(this.clienteService.getAll()),
  });

  borrar(id: number): void {
    this.clienteService.borrar(id).subscribe((_) => this.clientes.reload());
  }
}
