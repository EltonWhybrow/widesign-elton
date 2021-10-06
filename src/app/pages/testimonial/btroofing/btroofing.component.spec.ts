import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtroofingComponent } from './btroofing.component';

describe('BtroofingComponent', () => {
  let component: BtroofingComponent;
  let fixture: ComponentFixture<BtroofingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtroofingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtroofingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
