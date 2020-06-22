import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFarmerComponent } from './new-farmer.component';

describe('NewFarmerComponent', () => {
  let component: NewFarmerComponent;
  let fixture: ComponentFixture<NewFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
