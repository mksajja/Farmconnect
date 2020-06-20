import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerpostFormComponent } from './farmerpost-form.component';

describe('FarmerpostFormComponent', () => {
  let component: FarmerpostFormComponent;
  let fixture: ComponentFixture<FarmerpostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerpostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerpostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
