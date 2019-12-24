import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersianToolsComponent } from './persian-tools.component';

describe('PersianToolsComponent', () => {
  let component: PersianToolsComponent;
  let fixture: ComponentFixture<PersianToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersianToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersianToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
