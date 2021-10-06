import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudlandscapesComponent } from './budlandscapes.component';

describe('BudlandscapesComponent', () => {
  let component: BudlandscapesComponent;
  let fixture: ComponentFixture<BudlandscapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudlandscapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudlandscapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
