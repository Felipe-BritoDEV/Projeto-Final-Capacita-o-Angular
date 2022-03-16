import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServCalculadoraService } from '../services/serv-calculadora.service';

import { CompCalculadoraComponent } from './comp-calculadora.component';

describe('CompCalculadoraComponent', () => {
  let component: CompCalculadoraComponent;
  let fixture: ComponentFixture<CompCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCalculadoraComponent ],
      providers: [ ServCalculadoraService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
