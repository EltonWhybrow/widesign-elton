import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBurgerComponent } from './logo-burger.component';

describe('LogoBurgerComponent', () => {
  let component: LogoBurgerComponent;
  let fixture: ComponentFixture<LogoBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoBurgerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
