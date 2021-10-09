import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSmComponent } from './logo-sm.component';

describe('LogoSmComponent', () => {
  let component: LogoSmComponent;
  let fixture: ComponentFixture<LogoSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
