import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Spares4mowersComponent } from './spares4mowers.component';

describe('Spares4mowersComponent', () => {
  let component: Spares4mowersComponent;
  let fixture: ComponentFixture<Spares4mowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spares4mowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spares4mowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
