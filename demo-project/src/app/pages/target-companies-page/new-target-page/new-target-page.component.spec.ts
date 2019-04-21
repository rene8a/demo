import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTargetPageComponent } from './new-target-page.component';

describe('NewTargetPageComponent', () => {
  let component: NewTargetPageComponent;
  let fixture: ComponentFixture<NewTargetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTargetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTargetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
