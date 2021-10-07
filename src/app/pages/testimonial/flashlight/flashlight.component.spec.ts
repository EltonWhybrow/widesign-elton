import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashlightComponent } from './flashlight.component';

describe('FlashlightComponent', () => {
  let component: FlashlightComponent;
  let fixture: ComponentFixture<FlashlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
