import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDonasComponent } from './vista-donas.component';

describe('VistaDonasComponent', () => {
  let component: VistaDonasComponent;
  let fixture: ComponentFixture<VistaDonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
