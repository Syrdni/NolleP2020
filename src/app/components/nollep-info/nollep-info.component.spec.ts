import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NollepInfoComponent } from './nollep-info.component';

describe('NollepInfoComponent', () => {
  let component: NollepInfoComponent;
  let fixture: ComponentFixture<NollepInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NollepInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NollepInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
