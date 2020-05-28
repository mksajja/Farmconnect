import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeInfoTableComponent } from './trade-info-table.component';

describe('TradeInfoTableComponent', () => {
  let component: TradeInfoTableComponent;
  let fixture: ComponentFixture<TradeInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
