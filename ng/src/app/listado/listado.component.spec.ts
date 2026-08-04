import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it } from 'vitest';

import { ClienteService } from '../cliente.service';
import { ListadoComponent } from './listado.component';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListadoComponent ],
      providers: [
        provideRouter([]),
        {
          provide: ClienteService,
          useValue: {
            getAll: () => of([{ id: 1, nombre: 'Juan' }, { id: 2, nombre: 'Maria' }]),
            borrar: () => of({}),
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
