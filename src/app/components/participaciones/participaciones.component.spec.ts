import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionesComponent } from './participaciones.component';

describe('ParticipacionesComponent', () => {
  let component: ParticipacionesComponent;
  let fixture: ComponentFixture<ParticipacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
