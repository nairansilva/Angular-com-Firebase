import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaperDataComponent } from './diaper-data.component';

describe('DiaperDataComponent', () => {
  let component: DiaperDataComponent;
  let fixture: ComponentFixture<DiaperDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaperDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaperDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
