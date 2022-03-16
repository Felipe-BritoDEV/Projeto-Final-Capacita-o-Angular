import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogodavelhaComponent } from './jogodavelha.component';

describe('JogodavelhaComponent', () => {
  let component: JogodavelhaComponent;
  let fixture: ComponentFixture<JogodavelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogodavelhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogodavelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
