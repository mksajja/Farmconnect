import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldFarmerComponent } from './old-farmer.component';

describe('OldFarmerComponent', () => {
  let component: OldFarmerComponent;
  let fixture: ComponentFixture<OldFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
