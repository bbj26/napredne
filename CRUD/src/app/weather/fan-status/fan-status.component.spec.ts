import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanStatusComponent } from './fan-status.component';

describe('FanStatusComponent', () => {
  let component: FanStatusComponent;
  let fixture: ComponentFixture<FanStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
