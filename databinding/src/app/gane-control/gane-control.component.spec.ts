import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaneControlComponent } from './gane-control.component';

describe('GaneControlComponent', () => {
  let component: GaneControlComponent;
  let fixture: ComponentFixture<GaneControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaneControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaneControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
