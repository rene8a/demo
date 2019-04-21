import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTargetPageComponent } from './view-target-page.component';

describe('ViewTargetPageComponent', () => {
  let component: ViewTargetPageComponent;
  let fixture: ComponentFixture<ViewTargetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTargetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTargetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
